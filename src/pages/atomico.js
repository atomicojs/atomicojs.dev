import { c, html, css } from "atomico";
import { MyButton } from "./atomico-jsx";
function component() {
  return html`<host shadowDom>
    <h1 onclick=${console.log}>welcome!</h1>
    <${MyButton} />
  </host>`;
}

component.styles = css`
  :host {
    width: 200px;
    height: 200px;
    background: black;
    color: white;
    display: block;
  }
`;

customElements.define("my-wc", c(component));
