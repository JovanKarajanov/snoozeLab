if (!customElements.get('scroll-to-top')) {
  class ScrollToTop extends HTMLElement {
    constructor() {
      super();
      this._button = null;
      this._onScroll = this._onScroll.bind(this);
      this._onClick = this._onClick.bind(this);
    }

    connectedCallback() {
      this._button = this.querySelector('.scroll-to-top__button');
      if (!this._button) return;

      this._button.addEventListener('click', this._onClick);
      window.addEventListener('scroll', this._onScroll, { passive: true });
      this._onScroll();
    }

    disconnectedCallback() {
      this._button?.removeEventListener('click', this._onClick);
      window.removeEventListener('scroll', this._onScroll);
    }

    _onScroll() {
      const past = window.scrollY > 400;
      this._button.classList.toggle('is-visible', past);
    }

    _onClick() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  customElements.define('scroll-to-top', ScrollToTop);
}
