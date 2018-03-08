module.exports = {
  rules: {
    // awlet 提供的 路径alias功能 与该规则冲突
    'import/no-extraneous-dependencies': [0],
    // awlet 提供的 路径alias功能 导致解析时无法确定真实文件类型，所以使用 always 规则会报错
    'import/extensions': [0],
    // awlet 提供的 路径alias功能 与该规则冲突
    'import/no-unresolved': [0],
    // awlet 提供的 入口配置功能 与该规则冲突
    'spaced-comment': [0],
  }
};