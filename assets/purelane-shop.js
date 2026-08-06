(() => {
  const namespace = (window.PurelaneShopGrid = window.PurelaneShopGrid || {});

  if (namespace.booted) {
    return;
  }

  namespace.booted = true;
  namespace.controllers = namespace.controllers || new Map();

  const SECTION_SELECTOR = '[data-purelane-shop]';
  const TARGET_SELECTOR = '[data-purelane-reveal]';

  class PurelaneShopController {
    constructor(section) {
      this.section = section;
      this.sectionId = section.dataset.sectionId;
      this.targets = Array.from(section.querySelectorAll(TARGET_SELECTOR));
      this.observer = null;
    }

    init() {
      if (!this.sectionId || this.targets.length === 0) {
        return;
      }

      if (this.shouldRevealImmediately()) {
        this.revealAll();
        return;
      }

      this.section.setAttribute('data-reveal-ready', 'true');

      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              return;
            }

            entry.target.classList.add('is-visible');
            this.observer.unobserve(entry.target);
          });
        },
        {
          threshold: 0.12,
          rootMargin: '0px 0px -12% 0px',
        }
      );

      this.targets.forEach((target) => {
        this.observer.observe(target);
      });
    }

    shouldRevealImmediately() {
      return (
        this.section.dataset.enableReveal !== 'true' ||
        window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
        !('IntersectionObserver' in window) ||
        Boolean(window.Shopify && Shopify.designMode)
      );
    }

    revealAll() {
      this.section.removeAttribute('data-reveal-ready');
      this.targets.forEach((target) => {
        target.classList.add('is-visible');
      });
    }

    destroy() {
      if (this.observer) {
        this.observer.disconnect();
        this.observer = null;
      }

      this.section.removeAttribute('data-reveal-ready');
    }
  }

  function initSection(section) {
    if (!section) {
      return;
    }

    const sectionId = section.dataset.sectionId;
    if (!sectionId) {
      return;
    }

    destroySection(sectionId);

    const controller = new PurelaneShopController(section);
    namespace.controllers.set(sectionId, controller);
    controller.init();
  }

  function destroySection(sectionId) {
    const controller = namespace.controllers.get(sectionId);
    if (!controller) {
      return;
    }

    controller.destroy();
    namespace.controllers.delete(sectionId);
  }

  function initAll(root = document) {
    root.querySelectorAll(SECTION_SELECTOR).forEach((section) => {
      initSection(section);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initAll();
    });
  } else {
    initAll();
  }

  document.addEventListener('shopify:section:load', (event) => {
    const section = event.target.matches(SECTION_SELECTOR)
      ? event.target
      : event.target.querySelector(SECTION_SELECTOR);

    initSection(section);
  });

  document.addEventListener('shopify:section:unload', (event) => {
    destroySection(event.detail.sectionId);
  });
})();
