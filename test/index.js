const { ESLint: ESLint8 } = require('eslint')
const t = require('tap')

const code = `const foo = 1
const bar = function () {}
bar(foo)
`

t.test('config loads correctly', t => {
  const loadConfig = (desc, Ctor) => t.test(async t => {
    const engine = new Ctor({
      useEslintrc: false,
      overrideConfigFile: 'lib/index.js', // this is relative to the root of the repo
    })

    const [result] = await engine.lintText(code)
    t.equal(result.errorCount, 0, 'no errors')
  })

  t.plan(1)
  loadConfig('eslint 8', ESLint8)
  t.end()
})
