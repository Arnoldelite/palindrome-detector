const shell = require('shelljs')

module.exports = async () => {
  try {
    await shell.exec('npm run mongodb-parse')
  } catch (e) {
    console.log(e)
  }
}
