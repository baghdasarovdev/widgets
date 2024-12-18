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
      file: "./widget/index.js",
      format: "cjs",
      exports: "named",
    },
    {
      file: "./widget/index.es.js",
      format: "es",
      exports: "named",
    },
    {
      file: "./widget/index.min.js", // Output minified version (optional)
      format: "cjs",
      exports: "named",
      plugins: [
        terser({
          compress: {
            drop_console: true, // Remove all console logs
            drop_debugger: true, // Remove debugger statements
            pure_getters: true, // Optimize getters (e.g., obj.prop())
            passes: 3, // Run multiple passes for more aggressive minification
            global_defs: {
              // Optionally, you can define global constants that are removed in production
              "process.env.NODE_ENV": JSON.stringify("production"),
            },
          },
          mangle: {
            properties: {
              // Mangle property names to reduce file size further
              regex: /^_/, // Only mangle properties that start with an underscore
            },
          },
          output: {
            comments: false, // Remove comments from the output
            beautify: false, // Disable beautification (for production)
            preamble: "/* Minified by Terser */", // Optionally add a banner in the output file
          },
        }),
      ],
    },
    {
      file: "./widget/index.es.min.js", // Minified ES module (optional)
      format: "es",
      exports: "named",
      plugins: [
        terser({
          compress: {
            drop_console: true, // Remove all console logs
            drop_debugger: true, // Remove debugger statements
            pure_getters: true, // Optimize getters (e.g., obj.prop())
            passes: 3, // Run multiple passes for more aggressive minification
            global_defs: {
              "process.env.NODE_ENV": JSON.stringify("production"),
            },
          },
          mangle: {
            properties: {
              regex: /^_/, // Only mangle properties that start with an underscore
            },
          },
          output: {
            comments: false, // Remove comments from the output
            beautify: false, // Disable beautification (for production)
          },
        }),
      ],
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
