/* eslint-disable import/no-anonymous-default-export */
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "@rollup/plugin-typescript";
import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser"; // Import terser plugin

export default {
  input: "src/components/Hello.tsx", // Your entry point
  output: [
    {
      file: "./newWidget/index.js",
      format: "cjs",
      exports: "named",
    },
    {
      file: "./newWidget/index.es.js",
      format: "es",
      exports: "named",
    },
    {
      file: "./newWidget/index.min.js", // Output minified version (optional)
      format: "cjs",
      exports: "named",
      plugins: [terser()], // Minify using terser
    },
    {
      file: "./newWidget/index.es.min.js", // Minified ES module (optional)
      format: "es",
      exports: "named",
      plugins: [terser()], // Minify using terser
    },
  ],
  plugins: [
    peerDepsExternal(), // Exclude React and ReactDOM from the bundle
    resolve(), // Resolve modules from node_modules
    commonjs(), // Convert CommonJS modules to ES6
    typescript({
      // Transpile TypeScript
      tsconfig: "./tsconfig.json",
    }),
    babel({
      exclude: "node_modules/**", // Don't transpile node_modules
      babelHelpers: "bundled", // Ensure helpers are bundled
      presets: ["@babel/preset-react"], // Add React preset
    }),
  ],
  external: ["react", "react-dom"], // Exclude React and ReactDOM from the bundle
};
