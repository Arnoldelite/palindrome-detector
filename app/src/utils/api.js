import axios from 'axios'

function fetchMessages() {
  return axios({
    method: 'get',
    url: '/api/v1/messages',
    baseURL: 'http://localhost:3000',
    responseType: 'json',
    withCredentials: false,
  }).then(response => {
    console.log('response fetchMessages>>', response)
    return response.data
  })
}

function fetchMessage(id) {
  return axios({
    method: 'get',
    url: '/api/v1/message/:id',
    baseURL: 'http://localhost:3000',
    responseType: 'json',
    withCredentials: false,
    // headers: {'X-Requested-With': 'XMLHttpRequest'},
    params: {
      id,
      limit: 20,
      offset: 50,
      rating: 'g',
      fmt: 'json',
    },
  }).then(response => {
    console.log('response fetchMessage >>', response)
    // return response.data.items;
  })
}

function sendMessage(data) {
  return axios({
    method: 'post',
    url: '/api/v1/message',
    baseURL: 'http://localhost:3000',
    responseType: 'json',
    withCredentials: false,
    // headers: {'X-Requested-With': 'XMLHttpRequest'},
    params: {
      content: data,
      limit: 20,
      offset: 50,
      rating: 'g',
      fmt: 'json',
    },
  }).then(response => {
    console.log('response sendMessage >>', response)
    // return response.data.items;
  })
}

function updateMessage(id, content) {
  return axios({
    method: 'put',
    url: '/api/v1/message/update',
    baseURL: 'http://localhost:3000',
    responseType: 'json',
    withCredentials: false,
    // headers: {'X-Requested-With': 'XMLHttpRequest'},
    params: {
      id,
      content,
      limit: 20,
      offset: 50,
      rating: 'g',
      fmt: 'json',
    },
  }).then(response => {
    console.log('response updateMessage>>', response)
    // return response.data.items;
  })
}

function deleteMessage(id) {
  return axios({
    method: 'delete',
    url: '/api/v1/message/remove',
    baseURL: 'http://localhost:3000',
    responseType: 'json',
    withCredentials: false,
    // headers: {'X-Requested-With': 'XMLHttpRequest'},
    params: {
      id,
      limit: 20,
      offset: 50,
      rating: 'g',
      fmt: 'json',
    },
  }).then(response => {
    console.log('response deleteMessage>>', response)
    // return response.data.items;
  })
}

export default {
  fetchMessages,
  fetchMessage,
  sendMessage,
  updateMessage,
  deleteMessage,
}
