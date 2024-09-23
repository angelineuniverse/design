import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import dts from "rollup-plugin-dts";

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
      }),
      terser(),
    ],
  },
  {
    input: "lib/esm/types/index.d.ts",
    output: [{ file: "lib/index.d.ts", format: "esm" }],
    plugins: [dts.default()],
    external: [/\.(css|less|scss)$/],
  },
];

export default rollup;
