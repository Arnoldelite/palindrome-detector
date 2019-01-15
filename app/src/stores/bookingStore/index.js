import { observable, action, configure, computed, toJS } from 'mobx'

configure({ enforceActions: 'always' })
class Store {
  @observable
  groups

  @observable
  bookings

  @observable
  driverBookings

  @observable
  bookingForm

  @observable
  saveBookingIsLoading

  @observable
  isBookingFormModalVisible

  constructor() {
    this.init()
  }

  @action
  init = () => {
    this.bookings = observable.array([])
    this.driverBookings = observable.array([])
    this.groups = observable.array([])
    this.bookingForm = observable.map({})
    this.isBookingFormModalVisible = false
  }

  @action
  setGroups = groups => {
    this.groups = groups
  }

  @action
  setBookings = bookings => {
    this.bookings = bookings
  }

  @action
  setDriverBookings = bookings => {
    this.driverBookings = bookings
  }

  @action
  showBookingFormModal = state => {
    this.isBookingFormModalVisible = state
  }

  @action
  setBookingForm = booking => {
    this.bookingForm = booking
  }

  @action
  addBooking = booking => {
    const bookings = this.bookings
    bookings.unshift(booking)
    this.bookings = [...bookings]
  }

  @action
  updateBooking = updatedBooking => {
    const bookings = this.bookings
    const index = bookings.findIndex(b => b.id === updatedBooking.id)
    if (index > -1) {
      bookings[index] = updatedBooking
    }
    this.bookings = [...bookings] // Important for observers to re-render
  }

  @action
  setBookingsInGroup = (group, bookings) => {
    const u = this.groups.find(g => g.id === group.id)
    if (u) {
      u.bookings = bookings
    }
    this.setGroups([...this.groups])
  }

  @action
  setSaveBookingIsLoading = state => {
    this.saveBookingIsLoading = state
  }

  @action
  clear = () => {
    this.groups = []
  }

  @computed
  get upcomingDriverBookings() {
    return toJS(this.driverBookings.filter(u => u.status === 1 || u.status === undefined))
  }

  @computed
  get activeDriverBookings() {
    return toJS(this.driverBookings.filter(u => u.status === 2))
  }

  @computed
  get completedDriverBookings() {
    return toJS(this.driverBookings.filter(u => u.status === 3))
  }
}

const BookingGroupStore = new Store()

export { BookingGroupStore }

export default BookingGroupStore
