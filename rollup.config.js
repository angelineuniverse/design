import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import dts from "rollup-plugin-dts";
const rollup = [
  {
    input: "./src/index.ts",
    output: [
      {
        dir: "lib",
        format: "cjs",
        sourcemap: true,
      },
      {
        dir: "lib",
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        declaration: true,
        declarationDir: "lib",
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
    input: "lib/index.d.ts",
    output: [{ file: "lib/index.d.ts", format: "esm" }],
    plugins: [dts.default()],
    external: [/\.(css|less|scss)$/],
  },
];

export default rollup;
