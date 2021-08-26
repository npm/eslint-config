const { CLIEngine } = require('eslint')
const t = require('tap')

t.test('config loads correctly', async (t) => {
  const code = `const foo = 1
const bar = function () {}
bar(foo)
`

  const engine = new CLIEngine({
    useEslintrc: false,
    configFile: 'lib/index.js', // this is relative to the root of the repo
  })

  const result = engine.executeOnText(code)
  t.equal(result.errorCount, 0, 'had no errors')
})
