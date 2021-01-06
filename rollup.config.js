import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import filesize from 'rollup-plugin-filesize'

const config = {
  input: 'src/index.js',
  external: [ 'stimulus' ],
  output: {
    dir: 'dist/index.js',
    format: 'es'
  },
  plugins: [resolve(), babel({ babelHelpers: 'bundled' }), filesize()]
}

export default config
