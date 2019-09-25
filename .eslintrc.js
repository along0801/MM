module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
<<<<<<< HEAD
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 不检查结尾分号
    'semi': 0,
    // 函数名和括号之间空格不检查
    'space-before-function-paren': 0,
    // 不检查单双引号
    'quotes': 0
=======
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
>>>>>>> f7ddb7ee3f4ad1633d5a593f9aba404d61dfebed
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}
