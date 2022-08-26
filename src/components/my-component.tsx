import { c, useEffect, useState } from "atomico";

function myComponent() {
  const [state, setState] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setState((state) => state + 1);
    }, 1000);
  }, []);

  return <host>Hello world! : {state}</host>;
}

export const MyComponent = c(myComponent);

customElements.define("my-component", MyComponent);
