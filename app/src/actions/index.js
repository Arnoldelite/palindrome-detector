import axios from 'axios'
import { message } from 'antd'
import { store } from '..'

export function apiError(err) {
  if (err && err.response) {
    const { status, data } = err.response
    if (status && data && status === 400) {
      message.error(data.message)
    } else {
      message.error(JSON.stringify(err))
    }
  } else {
    message.error(JSON.stringify(err))
  }
}

export async function save(message) {
  try {
    const response = await axios.post(`/api/v1/message`, message)
    store.addMessage(response.data)
  } catch (e) {
    apiError(e)
  }
}

export async function update(message) {
  try {
    const response = await axios.put(`/api/v1/message`, message)
    store.updateMessage(response.data)
  } catch (e) {
    apiError(e)
  }
}

export async function list() {
  try {
    store.setIsLoading(true)
    const response = await axios.get(`/api/v1/messages`)
    store.setMessages(response.data)
  } catch (e) {
    apiError(e)
  } finally {
    store.setIsLoading(false)
  }
}

export async function get(id) {
  try {
    const response = await axios.get(`/api/v1/message/${id}`)
    store.setMessage(response.data)
  } catch (e) {
    apiError(e)
  }
}

export async function remove(message) {
  try {
    await axios.delete(`/api/v1/message/${message.objectId}`, { data: message })
    store.deleteMessage(message.objectId)
  } catch (e) {
    apiError(e)
  }
}
