import babel from '@rollup/plugin-babel'
import external from 'rollup-plugin-peer-deps-external'
import pkg from './package.json'
import resolve from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import typescript from 'rollup-plugin-typescript2'

export default [
  {
    input: './src/main.tsx',
    output: [{ file: 'dist/index.js', format: 'es', exports: 'named' }],
    external: [...Object.keys(pkg.peerDependencies || {})],
    plugins: [
      typescript({
        typescript: require('typescript'),
      }),
      babel({
        exclude: '/node_modules/**',
        presets: ['@babel/preset-react'],
      }),
      external(),
      resolve(),
      terser(),
    ],
  },
]
