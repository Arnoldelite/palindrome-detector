import Parse from 'parse/node'
import { errorMessage } from '../utils/errorUtils'
// import { parseConfig } from '../../server'
// export const port = process.env.PORT ? process.env.PORT : 3000

// const databaseURI = process.env.PROD
//   ? 'mongodb://mongodb:27017/palindrome-detector'
//   : 'mongodb://localhost:27017/palindrome-detector'

// export const parseConfig = {
//   appId: 'myAppId',
//   masterKey: 'myMasterKey',
//   databaseURI,
//   serverURL: `http://localhost:${port}/parse`,
// }

// Parse.initialize(parseConfig.appId, parseConfig.master);

export class Message {
  query() {

    return new Parse.Query(Parse.Object.extend('Message'))
  }

  messageObject() {
    const MessageObject = Parse.Object.extend('Message')
    return new MessageObject()
  }

  async getMessages() {
    try {
      const query = this.query()
      query.descending('createdAt')
      const messages = await query.find()
      return messages.map(o => o.toJSON())
    } catch (error) {
      throw errorMessage(error)
    }
  }

  async getMessage(id) {
    try {
      const query = this.query()
      const message = await query.get(id)
      return message.toJSON()
    } catch (error) {
      throw errorMessage(error)
    }
  }

  async saveMessage(param) {
    try {
      const message = this.messageObject()
      message.id = param.objectId ? param.objectId : undefined
      param.isPalindrome = this.isPalindrome(param.content)
      const messageRef = await message.save(param)
      return messageRef.toJSON()
    } catch (error) {
      throw errorMessage(error)
    }
  }

  async deleteMessage(id) {
    try {
      const query = this.query()
      const message = await query.get(id)
      if (message) {
        const result = await message.destroy()
        return result.toJSON()
      }
      return null
    } catch (error) {
      throw errorMessage(error)
    }
  }

  isPalindrome(content) {
    // remove special characters, spaces and make lowercase
    const removeChar = content.replace(/[^A-Z0-9]/gi, '').toLowerCase()

    // reverse removeChar for comparison
    const checkPalindrome = removeChar
      .split('')
      .reverse()
      .join('')

    // Check to see if str is a Palindrome
    return removeChar === checkPalindrome
  }
}

export default new Message()
