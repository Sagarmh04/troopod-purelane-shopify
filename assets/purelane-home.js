(function () {
  const namespace = (window.PurelaneHome = window.PurelaneHome || {});

  if (namespace.booted) return;
  namespace.booted = true;
  namespace.registry = namespace.registry || new Map();

  class ShellController {
    constructor(section) {
      this.section = section;
      this.sectionId = section.dataset.sectionId;
      this.stage = document.querySelector('[data-purelane-scene-root]');
      this.scenes = Array.from(document.querySelectorAll('.purelane-homepage .scene'));
      this.zones = Array.from(document.querySelectorAll('.purelane-homepage [data-scene]'));
      this.railLinks = Array.from(document.querySelectorAll('.purelane-homepage .rail a'));
      this.navRoot = document.querySelector('[data-purelane-nav-root]');
      this.nav = this.navRoot?.querySelector('.nav') || null;
      this.navLinks = Array.from(this.nav?.querySelectorAll('a') || []);
      this.navToggle = this.navRoot?.querySelector('[data-purelane-nav-toggle]') || null;
      this.cartLinks = Array.from(document.querySelectorAll('[data-purelane-cart-link]'));
      this.cartCounts = Array.from(document.querySelectorAll('[data-purelane-cart-count]'));
      this.cartBubble = document.getElementById('cart-icon-bubble');
      this.cartBubbleObserver = null;
      this.header = document.querySelector('.purelane-homepage .purelane-header');
      this.heroProduct = document.querySelector('.purelane-homepage .hero-prod');
      this.waterLayers = Array.from(document.querySelectorAll('.purelane-homepage [data-purelane-scene-root] .wl'));
      this.zoneMetrics = [];
      this.currentScene = 0;
      this.currentHash = window.location.hash || '#top';
      this.cartUpdateUnsubscribe = null;
      this.raf = null;
      this.mx = 0;
      this.my = 0;
      this.initialHashFrame = null;
      this.onScroll = this.onScroll.bind(this);
      this.onResize = this.onResize.bind(this);
      this.onMouseMove = this.onMouseMove.bind(this);
      this.onHashChange = this.onHashChange.bind(this);
      this.onToggleClick = this.onToggleClick.bind(this);
      this.onDocumentClick = this.onDocumentClick.bind(this);
      this.onKeyDown = this.onKeyDown.bind(this);
    }

    init() {
      window.addEventListener('scroll', this.onScroll, { passive: true });
      window.addEventListener('resize', this.onResize);
      window.addEventListener('hashchange', this.onHashChange);
      document.addEventListener('click', this.onDocumentClick);
      document.addEventListener('keydown', this.onKeyDown);

      if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && window.matchMedia('(min-width: 1024px)').matches) {
        window.addEventListener('mousemove', this.onMouseMove, { passive: true });
      }

      this.navToggle?.addEventListener('click', this.onToggleClick);
      if (typeof subscribe === 'function' && typeof PUB_SUB_EVENTS !== 'undefined' && PUB_SUB_EVENTS?.cartUpdate) {
        this.cartUpdateUnsubscribe = subscribe(PUB_SUB_EVENTS.cartUpdate, (event) => {
          const itemCount = event?.cartData?.item_count;
          if (typeof itemCount === 'number' && !Number.isNaN(itemCount)) {
            this.syncCartCount(itemCount);
            return;
          }
          requestAnimationFrame(() => this.syncCartCountFromBubble());
        });
      }
      this.observeCartBubble();
      this.syncCartCountFromBubble();
      this.measureZones();
      this.frame();
      this.initialHashFrame = requestAnimationFrame(() => {
        if (window.location.hash) {
          this.scrollToHash(window.location.hash, false, true);
        } else {
          this.syncRailAndNav();
        }
      });
    }

    destroy() {
      window.removeEventListener('scroll', this.onScroll);
      window.removeEventListener('resize', this.onResize);
      window.removeEventListener('hashchange', this.onHashChange);
      window.removeEventListener('mousemove', this.onMouseMove);
      document.removeEventListener('click', this.onDocumentClick);
      document.removeEventListener('keydown', this.onKeyDown);
      this.navToggle?.removeEventListener('click', this.onToggleClick);
      this.cartBubbleObserver?.disconnect();
      this.cartUpdateUnsubscribe?.();
      if (this.raf) cancelAnimationFrame(this.raf);
      if (this.initialHashFrame) cancelAnimationFrame(this.initialHashFrame);
      this.closeNav();
      this.raf = null;
      this.initialHashFrame = null;
      this.cartBubbleObserver = null;
      this.cartUpdateUnsubscribe = null;
    }

    onResize() {
      this.measureZones();
      if (window.innerWidth >= 1024) this.closeNav();
      this.onScroll();
    }

    onMouseMove(event) {
      this.mx = (event.clientX / window.innerWidth - 0.5) * 2;
      this.my = (event.clientY / window.innerHeight - 0.5) * 2;
      this.onScroll();
    }

    onScroll() {
      if (!this.raf) this.raf = requestAnimationFrame(() => this.frame());
    }

    onHashChange() {
      this.scrollToHash(window.location.hash || '#top', false);
    }

    onToggleClick(event) {
      event.preventDefault();
      if (!this.nav) return;
      if (this.nav.classList.contains('is-open')) this.closeNav();
      else this.openNav();
    }

    onDocumentClick(event) {
      const anchor = event.target.closest('.purelane-homepage a[href]');
      if (anchor) {
        const hash = this.getHashFromHref(anchor.getAttribute('href'));
        if (hash) {
          event.preventDefault();
          this.scrollToHash(hash, true);
          this.closeNav();
          return;
        }
      }

      if (!this.nav?.classList.contains('is-open')) return;
      if (this.navRoot?.contains(event.target)) return;
      this.closeNav();
    }

    onKeyDown(event) {
      if (event.key === 'Escape') this.closeNav();
    }

    openNav() {
      if (!this.nav) return;
      this.nav.classList.add('is-open');
      this.navToggle?.setAttribute('aria-expanded', 'true');
    }

    closeNav() {
      if (!this.nav) return;
      this.nav.classList.remove('is-open');
      this.navToggle?.setAttribute('aria-expanded', 'false');
    }

    getHashFromHref(href) {
      if (!href) return '';
      if (href.charAt(0) === '#') return href;

      try {
        const url = new URL(href, window.location.origin);
        if (url.pathname === window.location.pathname && url.hash) return url.hash;
      } catch (error) {
        return '';
      }

      return '';
    }

    measureZones() {
      this.zoneMetrics = this.zones.map((zone) => ({
        id: zone.getAttribute('id'),
        href: zone.getAttribute('id') ? `#${zone.getAttribute('id')}` : '',
        scene: parseInt(zone.getAttribute('data-scene'), 10) || 1,
        top: zone.getBoundingClientRect().top + window.scrollY
      })).filter((zone) => zone.id);
    }

    getHeaderOffset() {
      const headerHeight = this.header?.offsetHeight || 0;
      return headerHeight + (window.innerWidth < 900 ? 18 : 24);
    }

    getScrollTopForHref(href) {
      if (!href || href === '#top') return 0;
      const target = document.querySelector(href);
      if (!target) return null;
      return Math.max(0, target.getBoundingClientRect().top + window.scrollY - this.getHeaderOffset());
    }

    scrollToHash(href, pushHistory = false, instant = false) {
      const targetTop = this.getScrollTopForHref(href);
      if (targetTop === null) return;

      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const behavior = instant || reduced ? 'auto' : 'smooth';
      const nextHash = href === '#' ? '#top' : href;

      if (pushHistory) {
        history.pushState(null, '', nextHash);
      }

      this.currentHash = nextHash;
      window.scrollTo({ top: targetTop, behavior });
      this.onScroll();
    }

    setScene(sceneNumber) {
      if (!this.stage || sceneNumber === this.currentScene) return;
      this.currentScene = sceneNumber;
      this.scenes.forEach((scene, index) => scene.classList.toggle('on', index + 1 === sceneNumber));
      this.stage.setAttribute('data-d', String(sceneNumber));
    }

    syncLocationHash(activeHref) {
      if (!activeHref || activeHref === this.currentHash) return;
      history.replaceState(null, '', activeHref);
      this.currentHash = activeHref;
    }

    syncCartCount(count) {
      if (typeof count !== 'number' || Number.isNaN(count)) return;
      this.cartCounts.forEach((element) => {
        element.textContent = String(count);
      });
      this.cartLinks.forEach((element) => {
        element.setAttribute('aria-label', `Cart, ${count} items`);
      });
    }

    readCartCountFromBubble() {
      const countText =
        this.cartBubble?.querySelector('.cart-count-bubble [aria-hidden="true"]')?.textContent?.trim() || '';
      const parsedCount = Number.parseInt(countText, 10);
      return Number.isNaN(parsedCount) ? null : parsedCount;
    }

    syncCartCountFromBubble() {
      const count = this.readCartCountFromBubble();
      if (count === null) return;
      this.syncCartCount(count);
    }

    observeCartBubble() {
      if (!this.cartBubble || typeof MutationObserver === 'undefined') return;
      this.cartBubbleObserver = new MutationObserver(() => this.syncCartCountFromBubble());
      this.cartBubbleObserver.observe(this.cartBubble, {
        childList: true,
        subtree: true,
        characterData: true,
      });
    }

    syncRailAndNav() {
      const focus = window.scrollY + window.innerHeight * 0.42;
      let activeHref = '#top';

      this.zoneMetrics.forEach((zone) => {
        if (zone.top <= focus) activeHref = zone.href;
      });

      this.railLinks.forEach((link) => link.classList.toggle('on', link.getAttribute('href') === activeHref));
      this.navLinks.forEach((link) => link.classList.toggle('on', link.getAttribute('href') === activeHref));
      this.syncLocationHash(activeHref);
    }

    pickScene() {
      const focus = window.scrollY + window.innerHeight * 0.5;
      let nextScene = 1;

      this.zoneMetrics.forEach((zone) => {
        if (zone.top <= focus) nextScene = zone.scene;
      });

      this.setScene(nextScene);
    }

    frame() {
      this.raf = null;
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const y = window.scrollY || window.pageYOffset;

      if (this.header) this.header.classList.toggle('up', y > 90);

      if (!reduced) {
        this.waterLayers.forEach((layer, index) => {
          const depth = [0.05, 0.09, 0.03, 0.02][index] || 0.05;
          layer.style.setProperty('--px', `${(this.mx * depth * 130).toFixed(1)}px`);
          layer.style.setProperty('--py', `${(-y * depth + this.my * depth * 90).toFixed(1)}px`);
        });

        if (this.heroProduct) {
          const factor = Math.min(y / 700, 1);
          this.heroProduct.style.transform = `translate3d(${(this.mx * -16).toFixed(2)}px, ${(-factor * 54 + this.my * -10).toFixed(2)}px, 0) scale(${(1 - factor * 0.06).toFixed(3)})`;
          this.heroProduct.style.opacity = (1 - factor * 0.55).toFixed(3);
        }
      }

      this.pickScene();
      this.syncRailAndNav();
    }
  }

  class HeroController {
    constructor(section) {
      this.section = section;
      this.sectionId = section.dataset.sectionId;
      this.stage = section.querySelector('[data-purelane-hero-stage]');
      this.slides = Array.from(section.querySelectorAll('.hslide'));
      this.dots = Array.from(section.querySelectorAll('.hdots button'));
      this.index = 0;
      this.timer = null;
      this.observer = null;
      this.onEnter = () => this.stop();
      this.onLeave = () => this.play();
    }

    init() {
      if (!this.stage || this.slides.length < 2) return;

      this.dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
          this.stop();
          this.go(index);
          this.play();
        });
      });

      this.stage.addEventListener('mouseenter', this.onEnter);
      this.stage.addEventListener('mouseleave', this.onLeave);

      if ('IntersectionObserver' in window) {
        this.observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) this.play();
            else this.stop();
          });
        }, { threshold: 0.2 });
        this.observer.observe(this.stage);
      } else {
        this.play();
      }
    }

    go(index) {
      this.index = (index + this.slides.length) % this.slides.length;
      this.slides.forEach((slide, slideIndex) => slide.classList.toggle('on', slideIndex === this.index));
      this.dots.forEach((dot, dotIndex) => dot.classList.toggle('on', dotIndex === this.index));
    }

    play() {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || this.timer) return;
      this.timer = window.setInterval(() => this.go(this.index + 1), 3800);
    }

    stop() {
      if (!this.timer) return;
      window.clearInterval(this.timer);
      this.timer = null;
    }

    destroy() {
      this.stop();
      this.stage?.removeEventListener('mouseenter', this.onEnter);
      this.stage?.removeEventListener('mouseleave', this.onLeave);
      if (this.observer) this.observer.disconnect();
    }
  }

  class ProofController {
    constructor(section) {
      this.section = section;
      this.sectionId = section.dataset.sectionId;
      this.rotator = section.querySelector('[data-purelane-proof-rotator]');
      this.frames = Array.from(section.querySelectorAll('[data-purelane-rotator-item]'));
      this.dots = Array.from(section.querySelectorAll('.dots i'));
      this.captionTitle = section.querySelector('[data-purelane-rotator-title]');
      this.captionBody = section.querySelector('[data-purelane-rotator-body]');
      this.index = 0;
      this.timer = null;
      this.observer = null;
    }

    init() {
      if (!this.rotator || this.frames.length < 2 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

      this.observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !this.timer) this.timer = window.setInterval(() => this.step(), 2900);
          if (!entry.isIntersecting && this.timer) {
            window.clearInterval(this.timer);
            this.timer = null;
          }
        });
      }, { threshold: 0.25 });

      this.observer.observe(this.rotator);
    }

    step() {
      this.frames[this.index].classList.remove('on');
      this.dots[this.index]?.classList.remove('on');
      this.index = (this.index + 1) % this.frames.length;
      const current = this.frames[this.index];
      current.classList.add('on');
      this.dots[this.index]?.classList.add('on');
      if (this.captionTitle) this.captionTitle.textContent = current.dataset.name || '';
      if (this.captionBody) this.captionBody.textContent = current.dataset.note || '';
    }

    destroy() {
      if (this.timer) window.clearInterval(this.timer);
      if (this.observer) this.observer.disconnect();
      this.timer = null;
      this.observer = null;
    }
  }

  function initReveals(root = document) {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const elements = Array.from(root.querySelectorAll('.rv'));

    if (!elements.length) return;

    if (!('IntersectionObserver' in window) || reduced || (window.Shopify && Shopify.designMode)) {
      elements.forEach((element) => element.classList.add('in'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.12 });

    elements.forEach((element) => observer.observe(element));
  }

  function initSection(section) {
    if (!section) return;

    const id = section.dataset.sectionId;
    const type = section.dataset.purelaneController;

    if (!id || !type) return;

    destroySection(id);

    let controller = null;
    if (type === 'shell') controller = new ShellController(section);
    if (type === 'hero') controller = new HeroController(section);
    if (type === 'proof') controller = new ProofController(section);
    if (!controller) return;

    namespace.registry.set(id, controller);
    controller.init();
  }

  function destroySection(id) {
    const existing = namespace.registry.get(id);
    if (!existing) return;
    existing.destroy();
    namespace.registry.delete(id);
  }

  function boot(root = document) {
    initReveals(root);
    root.querySelectorAll('[data-purelane-controller]').forEach((section) => initSection(section));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => boot());
  } else {
    boot();
  }

  document.addEventListener('shopify:section:load', (event) => {
    initReveals(event.target);
    const section = event.target.querySelector('[data-purelane-controller]') || (event.target.matches('[data-purelane-controller]') ? event.target : null);
    initSection(section);
  });

  document.addEventListener('shopify:section:unload', (event) => {
    destroySection(event.detail.sectionId);
  });
})();
