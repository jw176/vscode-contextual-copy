import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import copy from 'rollup-plugin-copy';

export default {
    input: 'src/extension.js',
    output: [
        {
            file: 'dist/bundle.js',
            format: 'esm',
            plugins: [terser()],
        }
    ],
    external: ['vscode'],
    plugins: [
        nodeResolve(),
        commonjs(),
        copy({
            targets: [
                { src: 'assets/**/*', dest: 'dist/assets' }
            ]
        })
    ]
};
