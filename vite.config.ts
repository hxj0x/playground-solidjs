/// <reference types="vitest" />
/// <reference types="vite/client" />
import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
// import devtools from 'solid-devtools/vite';

export default defineConfig({
  plugins: [
    /* 
    Uncomment the following line to enable solid-devtools.
    For more info see https://github.com/thetarnav/solid-devtools/tree/main/packages/extension#readme
    */
    // devtools(),
    solidPlugin(),
  ],
  server: {
    port: 3000,
  },
  build: {
    // target: "esnext",
    // minify: false,
  },
  test: {
    environment: "jsdom",
    pool: "forks",
    poolOptions: {
      forks: {
        isolate: false,
      },
    },
    globals: true,
    deps: {
      optimizer: {
        web: {
          exclude: ["solid-js"],
        },
      },
    },
  },
  resolve: {
    conditions: ["development", "browser"],
  },
});
