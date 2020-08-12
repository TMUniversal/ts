import * as path from 'path'

import rules from './providers'

function getRulePackageDirectory (name: string, suffix: string = '') {
  const packagePath = require.resolve(name)
  const nodeModulesPath = path.dirname(packagePath)

  return path.join(nodeModulesPath, suffix)
}

module.exports = {
  extends: ['tslint-config-standard'],
  rules,
  rulesDirectory: [
    getRulePackageDirectory('tslint-config-security', 'dist/rules'),
    getRulePackageDirectory('tslint-eslint-rules', 'dist/rules')
  ]
}
