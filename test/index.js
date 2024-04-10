const { ESLint: ESLint8 } = require('eslint')
const t = require('tap')

const loadConfig = (desc, Ctor) => new Ctor({
  useEslintrc: false,
  overrideConfigFile: 'lib/index.js', // this is relative to the root of the repo
})

const lintText = async (engine, code) => {
  const [result] = await engine.lintText(code)
  return result
}

t.test('eslint8', async t => {
  const engine = loadConfig('eslint 8', ESLint8)

  t.test('config loads correctly', async t => {
    const code = `const foo = 1
const bar = function () {}
bar(foo)
`
    const result = await lintText(engine, code)
    t.equal(result.errorCount, 0, 'no errors')
  })

  t.test('unused args', async t => {
    const code = `function unused (a, b, c) {
  return b
}
function allUsed (a, b) {
  return b
}
unused()
allUsed()
`
    const result = await lintText(engine, code)
    t.equal(result.errorCount, 1, 'no errors')
    t.equal(result.messages[0].message, "'c' is defined but never used.")
  })
})
