import { defineConfig } from 'astro/config';

const repository = process.env.GITHUB_REPOSITORY || '';
const repositoryName = repository.includes('/') ? repository.split('/')[1] : '';

export default defineConfig({
  output: 'static',
  site: repositoryName ? `https://${repository.split('/')[0]}.github.io` : undefined,
  base: repositoryName ? `/${repositoryName}` : undefined,
  trailingSlash: 'always'
});