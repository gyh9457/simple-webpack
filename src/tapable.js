const { SyncHook } = require('tapable')

const hook = new SyncHook(['name'])

hook.tap('a', (name) => {
  console.log(name)
})

hook.call('gyh')