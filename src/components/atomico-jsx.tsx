import { c } from "atomico/core";

function button() {
  return (
    <host>
      <button>Click me!</button>
    </host>
  );
}

export const MyButton = c(button);

customElements.define("my-button", MyButton);
