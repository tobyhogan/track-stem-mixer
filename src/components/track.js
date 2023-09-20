class Track extends HTMLElement {
    constructor() {
      super();
    }


    connectedCallback() {
      this.innerHTML = `
        <h1>testing1234</h1>
        <h3>testagain1234</h2>
      
      `

      console.log("connected callback");
    }

    


}



customElements.define('track-component', Track);

