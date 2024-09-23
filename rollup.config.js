import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import dts from "rollup-plugin-dts";
import tailwindcss from "tailwindcss";
import * as tailwindConfig from "./tailwind.config.js";

const packageJson = require("./package.json");
const rollup = [
  {
    input: "./index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
      },
      {
        file: packageJson.module,
        format: "esm",
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        sourceMap: true,
        inlineSources: true,
      }),
      postcss({
        config: {
          path: "./postcss.config.cjs",
        },
        extentions: [".css"],
        minimize: true,
        inject: {
          insertAt: "top",
        },
        extract: "./tailwind.css",
        module: false,
        plugins: [tailwindcss(tailwindConfig), require("autoprefixer")],
      }),
      terser(),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts.default()],
    external: [/\.(css|less|scss)$/],
  },
];

export default rollup;
