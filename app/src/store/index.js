import { observable, action, configure } from 'mobx'

configure({ enforceActions: 'always' })

export default class Store {
  @observable
  popularRepos

  @observable
  repoInfo

  @observable
  messages

  @observable
  isLoading

  @observable
  messageInput

  @observable
  isEditModalVisible

  @observable
  isViewRepoModalVisible

  constructor() {
    this.init()
  }

  @action
  init = () => {
    this.messages = observable.array([])
    this.isLoading = false
    this.messageInput = observable.object({})
    this.popularRepos = observable.array([])
    this.repoInfo = observable.object({})
  }

  @action
  setPopular = repos => {
    this.popularRepos = repos
  }

  @action
  setMessages = messages => {
    this.messages = messages
  }

  @action
  setIsLoading = state => {
    this.isLoading = state
  }

  @action
  setMessage = data => {
    this.messageInput = data
  }

  @action
  showEditModal = data => {
    this.isEditModalVisible = data
  }

  @action
  showViewRepoModal = data => {
    this.isViewRepoModalVisible = data
  }

  @action
  viewRepoInfo = data => {
    this.repoInfo = data
  }

  @action
  addMessage = message => {
    const messages = this.messages
    messages.unshift(message)
    this.messages = [...messages]
  }

  @action
  updateMessage = message => {
    const messages = this.messages
    const index = messages.findIndex(m => m.objectId === message.objectId)
    if (index > -1) {
      messages[index] = message
    }
    this.messages = [...messages]
  }

  @action
  deleteMessage = id => {
    const messages = this.messages
    const index = messages.findIndex(m => m.objectId === id)
    if (index > -1) {
      messages.splice(index, 1)
    }
    this.messages = [...messages]
  }
}
