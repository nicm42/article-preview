// CSS
//import scss from 'rollup-plugin-scss';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';

// JS
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';

// Dev server
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

const plugins = () => [
  postcss({
    plugins: [autoprefixer()],
    extract: true,
    sourceMap: process.env.NODE_ENV === 'production' ? false : 'inline',
    minimize: process.env.NODE_ENV === 'production',
  }),
  babel({
    exclude: 'node_modules/**',
  }),
  resolve(),
  commonjs(),
  serve('dist'),
  livereload(),
  typescript(),
  process.env.NODE_ENV === 'production' && terser(),
];

export default {
  input: './src/scripts/main.ts',
  output: {
    file: './dist/bundle.min.js',
    format: 'iife',
  },
  plugins: plugins(),
};
