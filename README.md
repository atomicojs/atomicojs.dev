# Astro + Atomico SSR

Atomico SSR [plugin](./plugin/), tasks:

- [x] SSR from the server.
- [ ] Hydration, Atomico doesn't need `astro-root`, hydration is Automatic, but I need the component's js to be imported on the client.

> Atomico automatically hydrates the sun when detecting data-hydrate.

## Cases

in the `src/pages/` file are the example that I try to render on the client.

### Case 1

**client:load**: does not hydrate since the js is not imported on the client.

```html
<my-wc id="id" client:load></my-wc>
```

**Error**

```bash
Cannot read properties of null (reading 'replace')
    at removeTimestampQuery (C:\git\atomico\examples\astro\node_modules\vite\dist\node\chunks\dep-e1fc1d62.js:2360:16)
    at ModuleGraph.resolveUrl (C:\git\atomico\examples\astro\node_modules\vite\dist\node\chunks\dep-e1fc1d62.js:57480:33)
    at Object.resolve (file:///C:/git/atomico/examples/astro/node_modules/astro/dist/core/render/dev/index.js:108:72)
    at Module.generateHydrateScript (/node_modules/astro/dist/runtime/server/hydration.js:63:35)
    at Module.renderComponent (/node_modules/astro/dist/runtime/server/index.js:226:27) (x3)
```
