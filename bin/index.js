#!/usr/bin/env node

const { spawnSync } = require('child_process')
const { sync: whichSync } = require('which')
const { resolve } = require('path')
const eslintrc = resolve(__dirname, '../lib/index.js')
const args = ['-c', eslintrc, ...process.argv.slice(2)]
const result = spawnSync(whichSync('eslint'), args, { stdio: 'inherit' })
process.exitCode = result.exitCode
