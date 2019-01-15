import { message } from 'antd'

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
