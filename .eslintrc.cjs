module.exports = {
    env: {
      browser: true,
      es2021: true
    },
    extends: [
      'plugin:vue/vue3-essential',
      'standard'
    ],
    parserOptions: {
      ecmaVersion: 13,
      parser: '@typescript-eslint/parser',
      sourceType: 'module'
    },
    plugins: [
      'vue',
      '@typescript-eslint'
    ],
    rules: {
    },
    settings: {
      'import/resolver': {
        typescript: {
          // eslint-disable-next-line node/no-path-concat
          project: `${__dirname}/tsconfig.json`
        }
      }
    }
  }
  