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
      file: "./widget/index.umd.js", // UMD version for browser
      format: "umd", // UMD format
      name: "Widget", // Global variable name for the widget
      exports: "named", // Named exports
      plugins: [
        terser({
          compress: {
            drop_console: true,  // Remove console logs
            drop_debugger: true, // Remove debugger
            pure_getters: true,  // Optimize getters
            passes: 3,           // Run multiple passes for aggressive minification
            global_defs: {
              'process.env.NODE_ENV': JSON.stringify('production')
            }
          },
          mangle: {
            properties: {
              regex: /^_/  // Mangle properties that start with an underscore
            },
          },
          output: {
            comments: false,  // Remove comments
            beautify: false,  // Disable beautification (minified output)
          }
        })
      ]
    },
    {
      file: "./widget/index.min.js", // Minified version (optional)
      format: "umd", // UMD format
      name: "Widget", // Global variable name
      exports: "named", // Named exports
      plugins: [terser()],
    }
  ],
  plugins: [
    peerDepsExternal(), // Exclude React and ReactDOM from the bundle
    resolve(),          // Resolve modules from node_modules
    commonjs(),         // Convert CommonJS modules to ES6
    typescript({
      tsconfig: "./tsconfig.json", // Transpile TypeScript
    }),
    babel({
      exclude: "node_modules/**", // Don't transpile node_modules
      babelHelpers: "bundled",    // Ensure helpers are bundled
      presets: ["@babel/preset-react"],
    }),
  ],
  external: ["react", "react-dom"], // Exclude React and ReactDOM from the bundle
};
