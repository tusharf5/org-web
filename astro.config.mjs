import { defineConfig } from 'astro/config';
import { company } from './src/data/company.ts';

export default defineConfig({
  site: company.siteUrl,
  output: 'static',
  trailingSlash: 'always',
});
