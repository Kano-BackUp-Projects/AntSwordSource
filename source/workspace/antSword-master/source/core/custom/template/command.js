//
// 命令执行模板
//

module.exports = () => ({
  exec: {
    _: 'M',
    'z1': '#{bin}',
    'z2': '#{cmd}'
  },
  listcmd: {
    _: 'Y',
    'z1': '#{binarr}'
  }
})