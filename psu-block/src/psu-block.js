import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class PsuBlock extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`

  :host{
    display: grid;
  }
    
    .info-block1{
      display: inline-block;
      font-size: calc(10px + 2vmin);
      color: #fefefe;
      width: 403.531px;
      height: 201px;
      margin-left: 20px;
      border: 1px solid #444;
      text-align: center;
      padding-top: 101px;
      background-color: #1e407c;
    }

    .info-block2{
      display: inline-block;
      font-size: calc(10px + 2vmin);
      color: #1e407c;
      width: 403.531px;
      height: 201px;
      margin-top: 20px;
      margin-left: 20px;
      border: 1px solid #444;
      text-align: center;
      padding-bottom: 10px;
      background-color: #fefefe;
    }

    main {
      flex-grow: 1;
    }

    .app-footer {
      font-size: calc(12px + 0.5vmin);
      align-items: center;
    }

    .app-footer a {
      margin-left: 5px;
    }
  `;

  constructor() {
    super();
    this.header = 'My app';
  }

  render() {
    return html`
      <div class="info-block-wrapper" >    
                    <div class="info-block1">                    
                    <h3>88,000+ students  </h3>                 
                  </div>
                  <div class="info-block2">                    
                    <h3>58% </h3>
                        <b>__________________</b>
                        <p>Of students are Pennsylvania residents. </p>
                    </div>
                </div>
    `;
  }
}

customElements.define('psu-block', PsuBlock);