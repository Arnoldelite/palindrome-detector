import request from 'supertest'
import server from '../../..'
import messageAPI from '../../api/message'

const app = request(server)

const message1 = {
  id: 'booeqweqwe',
  content: 'racecar',
  isPalindrome: true,
}

const message2 = {
  content: 'racecar1',
  isPalindrome: false,
}

describe('Message', () => {
  describe('/api/v1/messages ', () => {
    test('success', done => {
      messageAPI.getMessages = jest.fn()
      messageAPI.getMessages.mockReturnValue([message1, message2])
      app
        .get('/api/v1/messages')
        .expect(200)
        .end(err => {
          if (err) throw done(err)
          expect(messageAPI.getMessages).toHaveBeenCalled()
          done()
        })
    })
  })

  describe('/api/message/:id', () => {
    test('Get message success', done => {
      messageAPI.getMessage = jest.fn()
      messageAPI.getMessage.mockReturnValue(message1)
      app
        .get(`/api/v1/message/${message1.id}`)
        .expect(200)
        .end((err, res) => {
          if (err) throw done(err)
          expect(messageAPI.getMessage).toHaveBeenCalledWith(message1.id)
          expect(res.body).toEqual(message1)
          done()
        })
    })

    test('Get message should catch error', done => {
      messageAPI.getMessage = jest.fn().mockImplementation(() => {
        throw new Error()
      })
      app
        .get(`/api/v1/message/${message2.id}`)
        .expect(400)
        .end(err => {
          if (err) throw done(err)
          done()
        })
    })
  })

  describe('/api/v1/message', () => {
    test('Message create success', done => {
      messageAPI.saveMessage = jest.fn()
      messageAPI.saveMessage.mockReturnValue(message1)
      const message = {
        content: 'racecar',
      }
      app
        .post(`/api/v1/message`)
        .send(message)
        .expect(200)
        .end((err, res) => {
          if (err) throw done(err)
          expect(messageAPI.saveMessage).toHaveBeenCalledWith(message)
          expect(res.body).toEqual(message1)
          done()
        })
    })

    test('Message create error catch missing params', done => {
      const data = {}
      app
        .post(`/api/v1/message`)
        .send(data)
        .expect(422)
        .end(err => {
          if (err) throw done(err)
          done()
        })
    })
  })

  describe('/api/v1/message/update', () => {
    test('Update user success', done => {
      messageAPI.updateMessage = jest.fn()
      messageAPI.updateMessage.mockReturnValue(message1)
      const message = {
        id: 'booeqweqwe',
        content: 'booking',
      }
      app
        .put(`/api/v1/message/update`)
        .send(message)
        .expect(200)
        .end((err, res) => {
          if (err) throw done(err)
          expect(messageAPI.saveMessage).toHaveBeenCalledWith(message.id, message.content)
          expect(res.body).toEqual(message1)
          done()
        })
    })

    test('Update message error catch missing params', done => {
      const message = {}
      app
        .put(`/api/v1/message/update`)
        .send(message)
        .expect(422)
        .end(err => {
          if (err) throw done(err)
          done()
        })
    })
  })

  describe('/api/v1/message/remove', () => {
    test('Delete message error catch missing params', done => {
      app
        .delete(`/api/v1/message/remove/${message2.id}`)
        .send(message2.id)
        .expect(422)
        .end(err => {
          if (err) throw done(err)
          done()
        })
    })

    test('Remove / Destroy message success', done => {
      messageAPI.deleteMessage = jest.fn()
      messageAPI.deleteMessage.mockReturnValue(message1)
      app
        .delete(`/api/v1/message/remove/${message1.id}`)
        .send(message1)
        .expect(200)
        .end((err, res) => {
          if (err) throw done(err)
          expect(messageAPI.deleteMessage).toHaveBeenCalledWith(message1.id)
          expect(res.body).toEqual(message1)
          done()
        })
    })
  })
})
