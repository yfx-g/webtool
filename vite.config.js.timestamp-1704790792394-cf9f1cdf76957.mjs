// vite.config.js
import { defineConfig } from "file:///C:/Users/ASUS/Desktop/github-action/web-tool/node_modules/.pnpm/vite@4.3.2_sass@1.62.1/node_modules/vite/dist/node/index.js";
import path from "path";
import vue from "file:///C:/Users/ASUS/Desktop/github-action/web-tool/node_modules/.pnpm/@vitejs+plugin-vue@4.1.0_vite@4.3.2_vue@3.2.47/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import topLevelAwait from "file:///C:/Users/ASUS/Desktop/github-action/web-tool/node_modules/.pnpm/vite-plugin-top-level-await@1.3.1_vite@4.3.2/node_modules/vite-plugin-top-level-await/exports/import.mjs";
import { createSvgIconsPlugin } from "file:///C:/Users/ASUS/Desktop/github-action/web-tool/node_modules/.pnpm/vite-plugin-svg-icons@2.0.1_vite@4.3.2/node_modules/vite-plugin-svg-icons/dist/index.mjs";
var __vite_injected_original_dirname = "C:\\Users\\ASUS\\Desktop\\github-action\\web-tool";
var vite_config_default = defineConfig({
  base: "/webtool",
  plugins: [
    vue(),
    topLevelAwait({
      // The export name of top-level await promise for each chunk module
      promiseExportName: "__tla",
      // The function to generate import names of top-level await promise in each chunk module
      promiseImportName: (i) => `__tla_${i}`
    }),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
      // 指定symbolId格式
      symbolId: "icon-[dir]-[name]"
      /**
       * 自定义插入位置
       * @default: body-last
       */
      // inject?: 'body-last' | 'body-first'
      /**
       * custom dom id
       * @default: __svg__icons__dom__
       */
      // customDomId: '__svg__icons__dom__',
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: "@import 'src/assets/sass/common.scss';@import 'src/assets/sass/theme.scss';@import 'src/assets/sass/layout.scss';"
      }
    }
  },
  resolve: {
    alias: {
      // 设置路径
      "~": path.resolve(__vite_injected_original_dirname, "./"),
      // 设置别名
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    },
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"]
  },
  // build: {
  //   assetsPublicPath: './assets' //此处为修改的地方，这里加.
  // },
  server: {
    host: "localhost",
    // 指定服务器主机名
    port: 4090,
    // 指定服务器端口
    hmr: true,
    open: true,
    // 在服务器启动时自动在浏览器中打开应用程序
    https: false
    // 是否开启 https
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxBU1VTXFxcXERlc2t0b3BcXFxcZ2l0aHViLWFjdGlvblxcXFx3ZWItdG9vbFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcQVNVU1xcXFxEZXNrdG9wXFxcXGdpdGh1Yi1hY3Rpb25cXFxcd2ViLXRvb2xcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL0FTVVMvRGVza3RvcC9naXRodWItYWN0aW9uL3dlYi10b29sL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcclxuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXHJcbmltcG9ydCB0b3BMZXZlbEF3YWl0IGZyb20gJ3ZpdGUtcGx1Z2luLXRvcC1sZXZlbC1hd2FpdCdcclxuaW1wb3J0IHsgY3JlYXRlU3ZnSWNvbnNQbHVnaW4gfSBmcm9tICd2aXRlLXBsdWdpbi1zdmctaWNvbnMnXHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIGJhc2U6ICcvd2VidG9vbCcsXHJcbiAgcGx1Z2luczogW1xyXG4gICAgdnVlKCksXHJcbiAgICB0b3BMZXZlbEF3YWl0KHtcclxuICAgICAgLy8gVGhlIGV4cG9ydCBuYW1lIG9mIHRvcC1sZXZlbCBhd2FpdCBwcm9taXNlIGZvciBlYWNoIGNodW5rIG1vZHVsZVxyXG4gICAgICBwcm9taXNlRXhwb3J0TmFtZTogJ19fdGxhJyxcclxuICAgICAgLy8gVGhlIGZ1bmN0aW9uIHRvIGdlbmVyYXRlIGltcG9ydCBuYW1lcyBvZiB0b3AtbGV2ZWwgYXdhaXQgcHJvbWlzZSBpbiBlYWNoIGNodW5rIG1vZHVsZVxyXG4gICAgICBwcm9taXNlSW1wb3J0TmFtZTogKGkpID0+IGBfX3RsYV8ke2l9YFxyXG4gICAgfSksXHJcbiAgICBjcmVhdGVTdmdJY29uc1BsdWdpbih7XHJcbiAgICAgIC8vIFx1NjMwN1x1NUI5QVx1OTcwMFx1ODk4MVx1N0YxM1x1NUI1OFx1NzY4NFx1NTZGRVx1NjgwN1x1NjU4N1x1NEVGNlx1NTkzOVxyXG4gICAgICBpY29uRGlyczogW3BhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCAnc3JjL2Fzc2V0cy9pY29ucycpXSxcclxuICAgICAgLy8gXHU2MzA3XHU1QjlBc3ltYm9sSWRcdTY4M0NcdTVGMEZcclxuICAgICAgc3ltYm9sSWQ6ICdpY29uLVtkaXJdLVtuYW1lXSdcclxuXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBcdTgxRUFcdTVCOUFcdTRFNDlcdTYzRDJcdTUxNjVcdTRGNERcdTdGNkVcclxuICAgICAgICogQGRlZmF1bHQ6IGJvZHktbGFzdFxyXG4gICAgICAgKi9cclxuICAgICAgLy8gaW5qZWN0PzogJ2JvZHktbGFzdCcgfCAnYm9keS1maXJzdCdcclxuXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBjdXN0b20gZG9tIGlkXHJcbiAgICAgICAqIEBkZWZhdWx0OiBfX3N2Z19faWNvbnNfX2RvbV9fXHJcbiAgICAgICAqL1xyXG4gICAgICAvLyBjdXN0b21Eb21JZDogJ19fc3ZnX19pY29uc19fZG9tX18nLFxyXG4gICAgfSlcclxuICBdLFxyXG4gIGNzczoge1xyXG4gICAgcHJlcHJvY2Vzc29yT3B0aW9uczoge1xyXG4gICAgICBzY3NzOiB7XHJcbiAgICAgICAgYWRkaXRpb25hbERhdGE6XHJcbiAgICAgICAgICBcIkBpbXBvcnQgJ3NyYy9hc3NldHMvc2Fzcy9jb21tb24uc2Nzcyc7QGltcG9ydCAnc3JjL2Fzc2V0cy9zYXNzL3RoZW1lLnNjc3MnO0BpbXBvcnQgJ3NyYy9hc3NldHMvc2Fzcy9sYXlvdXQuc2Nzcyc7XCJcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IHtcclxuICAgICAgLy8gXHU4QkJFXHU3RjZFXHU4REVGXHU1Rjg0XHJcbiAgICAgICd+JzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vJyksXHJcbiAgICAgIC8vIFx1OEJCRVx1N0Y2RVx1NTIyQlx1NTQwRFxyXG4gICAgICAnQCc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYycpXHJcbiAgICB9LFxyXG4gICAgZXh0ZW5zaW9uczogWycubWpzJywgJy5qcycsICcudHMnLCAnLmpzeCcsICcudHN4JywgJy5qc29uJywgJy52dWUnXVxyXG4gIH0sXHJcbiAgLy8gYnVpbGQ6IHtcclxuICAvLyAgIGFzc2V0c1B1YmxpY1BhdGg6ICcuL2Fzc2V0cycgLy9cdTZCNjRcdTU5MDRcdTRFM0FcdTRGRUVcdTY1MzlcdTc2ODRcdTU3MzBcdTY1QjlcdUZGMENcdThGRDlcdTkxQ0NcdTUyQTAuXHJcbiAgLy8gfSxcclxuICBzZXJ2ZXI6IHtcclxuICAgIGhvc3Q6ICdsb2NhbGhvc3QnLCAvLyBcdTYzMDdcdTVCOUFcdTY3MERcdTUyQTFcdTU2NjhcdTRFM0JcdTY3M0FcdTU0MERcclxuICAgIHBvcnQ6IDQwOTAsIC8vIFx1NjMwN1x1NUI5QVx1NjcwRFx1NTJBMVx1NTY2OFx1N0FFRlx1NTNFM1xyXG4gICAgaG1yOiB0cnVlLFxyXG4gICAgb3BlbjogdHJ1ZSwgLy8gXHU1NzI4XHU2NzBEXHU1MkExXHU1NjY4XHU1NDJGXHU1MkE4XHU2NUY2XHU4MUVBXHU1MkE4XHU1NzI4XHU2RDRGXHU4OUM4XHU1NjY4XHU0RTJEXHU2MjUzXHU1RjAwXHU1RTk0XHU3NTI4XHU3QTBCXHU1RThGXHJcbiAgICBodHRwczogZmFsc2UgLy8gXHU2NjJGXHU1NDI2XHU1RjAwXHU1NDJGIGh0dHBzXHJcbiAgfVxyXG59KVxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWtVLFNBQVMsb0JBQW9CO0FBQy9WLE9BQU8sVUFBVTtBQUNqQixPQUFPLFNBQVM7QUFDaEIsT0FBTyxtQkFBbUI7QUFDMUIsU0FBUyw0QkFBNEI7QUFKckMsSUFBTSxtQ0FBbUM7QUFPekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsTUFBTTtBQUFBLEVBQ04sU0FBUztBQUFBLElBQ1AsSUFBSTtBQUFBLElBQ0osY0FBYztBQUFBO0FBQUEsTUFFWixtQkFBbUI7QUFBQTtBQUFBLE1BRW5CLG1CQUFtQixDQUFDLE1BQU0sU0FBUztBQUFBLElBQ3JDLENBQUM7QUFBQSxJQUNELHFCQUFxQjtBQUFBO0FBQUEsTUFFbkIsVUFBVSxDQUFDLEtBQUssUUFBUSxRQUFRLElBQUksR0FBRyxrQkFBa0IsQ0FBQztBQUFBO0FBQUEsTUFFMUQsVUFBVTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFhWixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsS0FBSztBQUFBLElBQ0gscUJBQXFCO0FBQUEsTUFDbkIsTUFBTTtBQUFBLFFBQ0osZ0JBQ0U7QUFBQSxNQUNKO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQTtBQUFBLE1BRUwsS0FBSyxLQUFLLFFBQVEsa0NBQVcsSUFBSTtBQUFBO0FBQUEsTUFFakMsS0FBSyxLQUFLLFFBQVEsa0NBQVcsT0FBTztBQUFBLElBQ3RDO0FBQUEsSUFDQSxZQUFZLENBQUMsUUFBUSxPQUFPLE9BQU8sUUFBUSxRQUFRLFNBQVMsTUFBTTtBQUFBLEVBQ3BFO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFJQSxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUE7QUFBQSxJQUNOLE1BQU07QUFBQTtBQUFBLElBQ04sS0FBSztBQUFBLElBQ0wsTUFBTTtBQUFBO0FBQUEsSUFDTixPQUFPO0FBQUE7QUFBQSxFQUNUO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
