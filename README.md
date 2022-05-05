# Astro Starter Kit: Minimal

Atomico SSR plugin, tasks:

- [x] SSR desde el servidor.
- [ ] hydration, Atomico doesn't need `astro-root`, hydration is Automatic, but I need the component's js to be imported on the client.

## Cases

in the `src/pages/` file are the example that I try to render on the client.

### Case 1

**client:idle**: does not hydrate since the js is not imported on the client.

```html
<my-wc id="id" client:idle></my-wc>
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

### Case 2

**client:only**: does not hydrate since the js is not imported on the client.

```html
<my-wc id="id" client:only="atomico"></my-wc>
```

```bash
Uncaught SyntaxError: Unexpected token ':' (at (index):12:12)
```

```html
<script type="module" data-astro-component-hydration astro-script="//script-2">
  import setup from '/node_modules/.vite/deps/astro_client_only_js.js?v=286be239';
  import '/@id/astro:scripts/before-hydration.js';
  setup("ZXH7dJ", {name:"my-wc",value: "atomico"}, async () => {
    const [{ : Component }, { default: hydrate }] = await Promise.all([import("/@id/"), import("/@fs/C:/git/atomico/examples/astro/plugin/client.js")]);
    return (el, children) => hydrate(el)(Component, {id:"id"}, children);

  });
</script>
```
