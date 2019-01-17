import express from 'express'
import { body, validationResult } from 'express-validator/check'
import message from '../api/message'

const router = express.Router()

// doesn't require id ? list
router.get('/api/v1/messages', async (req, res) => {
  try {
    const result = await message.getMessages()
    res.status(200).send(result)
  } catch (error) {
    res.status(400).send(error)
  }
})

router.get('/api/v1/message/:id', async (req, res) => {
  if (req.params && req.params.id) {
    try {
      const result = await message.getMessage(req.params.id)
      res.status(200).send(result)
    } catch (error) {
      res.status(400).send(error)
    }
  } else {
    res.status(400).send('Missing message `id` ')
  }
})

router.post(
  '/api/v1/message',
  [
    body('content')
      .isString()
      .not()
      .isEmpty()
      .withMessage('Missing Message content'),
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).send({ errors: errors.array() })
    }
    try {
      const result = await message.saveMessage(req.body)
      res.status(200).send(result)
    } catch (error) {
      res.status(400).send(error)
    }
  },
)

router.put(
  '/api/v1/message/update',
  [
    body('content')
      .not()
      .isEmpty()
      .withMessage('Missing content'),
    body('id')
      .not()
      .isEmpty()
      .withMessage('Missing message id'),
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).send({ errors: errors.array() })
    }
    try {
      const result = await message.saveMessage(req.body.id, req.body.content)
      res.status(200).send(result)
    } catch (error) {
      res.status(400).send(error)
    }
  },
)

router.delete(
  '/api/v1/message/remove/:id',
  [
    body('objectId')
      .not()
      .isEmpty()
      .withMessage('Missing id of Message to be deleted'),
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).send({ errors: errors.array() })
    }
    try {
      const result = await message.deleteMessage(req.params.id)
      res.status(200).send(result)
    } catch (error) {
      res.status(400).send(error)
    }
  },
)

export default router
