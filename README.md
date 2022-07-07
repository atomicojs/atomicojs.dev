# Astro + Atomico SSR

Este proyecto actualmente ya posee astro integrado, pero los pasos a seguir para una integracion son:

**paso 1**

```bash
npm create astro@latest
```
selecciona la plantilla que mas de acomode para tu proyecto

**paso 1**

```bash
npm i -D @atomico/astro
```

**paso 2**

Añádir el flag `--experimental-integrations` a todos los script de astro

```json
"scripts": {
    "dev": "astro dev --experimental-integrations",
    "start": "astro dev --experimental-integrations",
    "build": "astro build --experimental-integrations",
    "preview": "astro preview --experimental-integrations"
},
```

**paso 4**

```js
import { defineConfig } from 'astro/config';
import Atomico from '@atomico/astro';

// https://astro.build/config
export default defineConfig({
  vite: {
    ssr: {
      external: ['atomico/html'],
    },
  },
  integrations: [Atomico({ cssLiterals: { minify: true } })],
});
```