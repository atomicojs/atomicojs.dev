import "atomico/ssr";
import { html } from "atomico";
export default {
  check(Component) {
    return customElements.get(Component);
  },
  renderToStaticMarkup(Component, props, children) {
    const dom = html`<${Component} ...${props}>${children}</${Component}>`;
    return { html: dom.render() };
  },
};
