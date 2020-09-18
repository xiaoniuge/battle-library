export default {
  esm: 'rollup',
  cjs: 'rollup',
  doc: { typescript: true },
  cssModules: {
    type: true,
    generateScopedName: '[path]_[local]_[hash:base64:5]',
  },
  extraBabelPlugins: [['import', { libraryName: 'antd', style: true }]],
};
