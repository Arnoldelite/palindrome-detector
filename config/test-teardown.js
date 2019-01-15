const shell = require('shelljs')

module.exports = async () => {
  try {
    await shell.exec('docker-compose kill')
  } catch (e) {
    console.log(e)
  }
}
