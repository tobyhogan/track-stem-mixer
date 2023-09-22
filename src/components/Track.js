class Track extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `


      <audio controls controlsList="nodownload noplaybackrate">
      Your browser does not support the audio element.
          <source src="./assets/pond-sweepme-lead.mp3" type="audio/mp3">
      </audio>
  
      <div class="flex audio-controls w-32 h-15 bg-white rounded-lg ml-2">
          <input id="volume-knob" type="range" value="100" class="input-knob volume-knob" outline-none focus:outline-none outline-transparent border-transparent focus:ring-0 min="0" max="100" data-diameter="40" data-fgcolor="#404040" data-bgcolor="#9da4b0"/>
      </div>


      `;
    }
  }
  
  customElements.define('track-component', Track);