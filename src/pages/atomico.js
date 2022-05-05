import { c, html, css, useProp } from "atomico";
import { MyButton } from "./atomico-jsx";

function component() {
  const [count, setProp] = useProp("count");
  return html`<host shadowDom>
    <h1 onclick=${console.log}>welcome! ${count}</h1>
    <${MyButton}
      onclick=${() => {
        setProp((count) => count + 1);
      }}
    />
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

component.props = {
  count: {
    type: Number,
    value: 0,
  },
};

customElements.define("my-wc", c(component));
