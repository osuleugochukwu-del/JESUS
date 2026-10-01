import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',

  // GitHub Pages website
  site: 'https://osuleugochukwu-del.github.io',

  // The repository is named JESUS, so every generated
  // page and asset must live underneath /JESUS/
  base: '/JESUS',

  // Generate folder-style URLs:
  // /JESUS/analytics/
  // /JESUS/journal/
  // /JESUS/products/
  trailingSlash: 'always'
});
