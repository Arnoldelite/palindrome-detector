const shell = require('shelljs')

module.exports = async () => {
  try {
    await shell.exec('npm run mongodb')
  } catch (e) {
    console.log(e)
  }
}
