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
    if (message.objectId) {
      store.updateMessage(response.data)
    } else {
      store.addMessage(response.data)
    }
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
    store.setIsLoading(true)
    const response = await axios.get(`/api/v1/message/${id}`)
    store.getMessage(response.data)
  } catch (e) {
    apiError(e)
  } finally {
    store.setIsLoading(false)
  }
}

export function edit() {
  try {
    console.log('edit')
  } catch (e) {
    console.log(e)
  } finally {
    console.log('done')
  }
}

export async function remove(id) {
  try {
    await axios.delete(`/api/v1/message/remove/${id}`)
    store.deleteMessage(id)
  } catch (e) {
    apiError(e)
  }
}
