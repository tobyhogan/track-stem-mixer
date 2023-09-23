class Track extends HTMLDivElement  {
    constructor() {
      super();
    }
  
    connectedCallback() {

    }
  }
  
customElements.define('track-component', Track, { extends: "div" });