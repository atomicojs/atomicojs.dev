# Astro + Atomico SSR

Atomico SSR [plugin](./plugin/), tasks:

- [x] SSR from the server.
- [ ] Hydration, Atomico doesn't need `astro-root`, hydration is Automatic, but I need the component's js to be imported on the client.
- [x] `npm run dev` and `npm run start`
- [x] `npm run build`
- [x] `npm run preview`

> Atomico automatically hydrates the sun when detecting data-hydrate.

## client:load error

in the `src/pages/` file are the example that I try to render on the client.

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

## Logs

### npm run build

**Error**

```bash
 error   Endpoint handler not found! Expected an exported function for "get"
    at renderEndpoint (file:///C:/git/atomico/examples/astro/node_modules/astro/dist/runtime/server/index.js:330:11)
    at call (file:///C:/git/atomico/examples/astro/node_modules/astro/dist/core/endpoint/index.js:28:26)
    at async generatePath (file:///C:/git/atomico/examples/astro/node_modules/astro/dist/core/build/generate.js:150:20)
    at async generatePage (file:///C:/git/atomico/examples/astro/node_modules/astro/dist/core/build/generate.js:88:5)
    at async generatePages (file:///C:/git/atomico/examples/astro/node_modules/astro/dist/core/build/generate.js:61:5)
    at async staticBuild (file:///C:/git/atomico/examples/astro/node_modules/astro/dist/core/build/static-build.js:86:5)
    at async AstroBuilder.build (file:///C:/git/atomico/examples/astro/node_modules/astro/dist/core/build/index.js:100:5)
    at async AstroBuilder.run (file:///C:/git/atomico/examples/astro/node_modules/astro/dist/core/build/index.js:141:7)
    at async build (file:///C:/git/atomico/examples/astro/node_modules/astro/dist/core/build/index.js:30:3)
    at async cli (file:///C:/git/atomico/examples/astro/node_modules/astro/dist/cli/index.js:123:16)
```
