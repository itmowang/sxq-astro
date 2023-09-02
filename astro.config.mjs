import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://blog2.loli.wang',
  // 规范链接
  outDir: "./docs", // 打包输出路径
  integrations: [tailwind()]
}); 