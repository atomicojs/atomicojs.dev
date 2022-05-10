import { c, css, useHost, DOMEvent, useState, useRef } from "atomico";
import { useListener } from "@atomico/hooks/use-listener";
import { useDebounceState } from "@atomico/hooks/use-debounce-state";

function useMouseMove() {
  const host = useHost();
  const [state, setState] = useDebounceState<{ x: number; y: number }>(
    10,
    {
      x: 0,
      y: 0,
    },
    "fps"
  );

  useListener(
    host,
    "mousemove",
    ({ currentTarget, pageX, pageY }: DOMEvent<HTMLElement, MouseEvent>) => {
      const { clientWidth, clientHeight } = currentTarget;
      const centerX = clientWidth / 2;
      const centerY = clientHeight / 2;
      const x =
        pageX > centerX
          ? (pageX - centerX) / centerX
          : (1 - pageX / centerX) * -1;

      const y =
        pageY > centerY
          ? (pageY - centerY) / centerY
          : (1 - pageY / centerY) * -1;

      setState({ x, y });
    }
  );

  return state;
}

function welcome() {
  const state = useMouseMove();
  return (
    <host shadowDom>
      <div class="atom-group">
        <div class="atom atom-0"></div>
        <div
          ref={(ref) => {
            ref.style.transform = `translate(${state.x * -100}px,${
              state.y * -100
            }px)`;
          }}
          class="atom atom-1"
        ></div>
        <div
          ref={(ref) => {
            ref.style.transform = `translate(${state.x * -50}px,${
              state.y * -50
            }px)`;
          }}
          class="atom atom-2 atom-inner-shadow"
        ></div>
        <div
          ref={(ref) => {
            ref.style.transform = `translate(${state.x * 100}px,${
              state.y * 100
            }px)`;
          }}
          class="atom atom-3 atom-inner-shadow"
        ></div>
      </div>
      <div class="atom-content">
        <div class="atom-inner">
          <slot></slot>
        </div>
      </div>
    </host>
  );
}

welcome.styles = css`
  :host {
    width: 100%;
    height: 100%;
    display: grid;
    overflow: hidden;
    place-content: center;
    --background: #0a0024;
    background: var(--background);
    position: relative;
    font-size: 1.8vh;
  }

  .atom-content {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    display: flex;
  }
  .atom-inner {
    margin: auto;
    display: grid;
    justify-items: center;
    gap: 1.25rem;
  }
  .atom {
    width: var(--size);
    height: var(--size);
    border-radius: 100%;
    position: absolute;
    background: var(--background);
    transition: 1s linear all;
  }
  .atom-group {
    width: 24.75em;
    height: 24.75em;
    margin: auto;
    position: relative;
  }
  .atom-inner-shadow {
    box-shadow: inset var(--shadow) rgba(171, 255, 252, 0.12),
      var(--shadow-2, 0px 0px 0px transparent),
      var(--shadow-3, 0px 0px 0px transparent),
      var(--shadow-4, 0px 0px 0px transparent);
  }
  .atom-0 {
    --size: 100%;
    box-shadow: 0px 3.125em 6.25 rgba(255, 255, 255, 0.5);
  }
  .atom-1 {
    --size: 50%;
    bottom: -10%;
    right: 0px;
    background: black;
    transition: 1s ease-ease-out all;
    filter: blur(2px);
  }
  .atom-2 {
    --size: 100%;
    --shadow: 2.5em -2.5em 3.75em;
    --shadow-3: inset -20px 20px 20px rgba(255, 0, 205, 0.16);
    --shadow-4: inset -10px 10px 8px -10px rgba(255, 255, 255, 0.25);
    filter: blur(1px);
    transition: 2s linear all;
  }
  .atom-3 {
    --size: 60%;
    --shadow: 2.5em -2.5em 3.75em;
    --shadow-2: -50px 50px 50px rgba(0, 0, 0, 0.1);
    --shadow-3: inset -20px 20px 20px rgba(255, 0, 205, 0.16);
    --shadow-4: inset -10px 10px 8px -10px rgba(255, 255, 255, 0.5);
    filter: blur(0.5px);
    top: -8%;
    left: 60%;
    transition: 0.5s linear all;
  }
`;

export const Welcome = c(welcome);

customElements.define("atomico-welcome", Welcome);
