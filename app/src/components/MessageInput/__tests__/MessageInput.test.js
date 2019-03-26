import Parse from 'parse/node'
import MessageInput from '../MessageInput'

const testParseServer = async () => {
  Parse.initialize('appId', 'masterKey')
  Parse.masterKey = 'masterKey'
  Parse.serverURL = `http://localhost:1337/parse`
}

const dropMessageTable = async () => {
  const messageTable = new Parse.Schema('Message')
  await messageTable.purge({ useMasterKey: true })
}

const testMessage = {
  content: 'racecar',
}

const testMessage2 = {
  content: 'Mom',
}

describe('User', () => {
  beforeAll(async done => {
    await testParseServer()
    done()
  })
  afterAll(async done => {
    await dropMessageTable()
    done()
  })
  beforeEach(async done => {
    await dropMessageTable()
    done()
  })

  describe('Messages', () => {
    test('saveMessage', async done => {
      const result = await message.saveMessage(testMessage)
      expect(result.objectId).toBeTruthy()
      expect(result.content).toEqual(testMessage.content)
      expect(result.isPalindrome).toBeTruthy()
      done()
    })

    test('getMessage', async done => {
      const data = await message.saveMessage(testMessage)
      const result = await message.getMessage(data.objectId)
      expect(result.objectId).toBeTruthy()
      expect(result.content).toEqual(testMessage.content)
      expect(result.isPalindrome).toBeTruthy()
      done()
    })

    test('updateMessage', async done => {
      const data = await message.saveMessage(testMessage)
      const result = await message.saveMessage({ ...data, content: 'qlik' })
      expect(result.objectId).toEqual(data.objectId)
      expect(result.content).toEqual('qlik')
      expect(result.isPalindrome).toBeFalsy()
      done()
    })

    test('getMessages', async done => {
      await message.saveMessage(testMessage)
      const result = await message.getMessages()
      expect(result.length).toEqual(1)
      expect(result[0].content).toEqual('racecar')
      expect(result[0].isPalindrome).toBeTruthy()
      done()
    })

    test('deleteMessage', async done => {
      const data = await message.saveMessage(testMessage2)
      const result = await message.deleteMessage(data.objectId)
      expect(result.objectId).toEqual(data.objectId)
      done()
    })
  })
})
