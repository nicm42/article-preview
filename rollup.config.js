// CSS
import scss from 'rollup-plugin-scss';
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

export default {
  input: './src/main.ts',
  output: [
    { file: './dist/bundle.min.js', format: 'cjs' },
    { file: 'lib.js', format: 'cjs' },
    { file: 'lib.min.js', format: 'cjs', plugins: [terser()] },
    { file: 'lib.esm.js', format: 'esm' },
    { file: '.dist/output.js', format: 'esm' },
  ],
  plugins: [
    postcss({
      extensions: ['.css'],
    }),
    babel({
      exclude: 'node_modules/**',
    }),
    resolve(),
    commonjs(),
    scss({
      processor: () => postcss([autoprefixer()]),
      includePaths: [
        path.join(__dirname, '../../node_modules/'),
        'node_modules/',
      ],
    }),
    serve('dist'),
    livereload(),
    typescript(),
  ],
};
