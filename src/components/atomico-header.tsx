import { c, css } from "atomico";

function header() {
  return (
    <host shadowDom onclick={console.log}>
      <div class="header">
        <div class="header_brand">
          <slot name="logo"></slot>
        </div>
        <div class="header_center">
          <slot name="link"></slot>
        </div>
        <div class="header_menu">
          <slot name="menu"></slot>
        </div>
      </div>
    </host>
  );
}

header.styles = css`
  :host {
    width: 100%;
    padding: 1rem;
    box-sizing: border-box;
  }
  .header {
    display: grid;
    grid-template-columns: auto auto auto;
    align-items: center;
    justify-content: space-between;
    max-width: var(--max-width, 1080px);
    margin: auto;
  }
`;

export const Header = c(header);

customElements.define("atomico-header", Header);
