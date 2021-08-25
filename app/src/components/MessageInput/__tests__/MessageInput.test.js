import React from 'react'
// import Parse from 'parse/node'
import { shallow } from 'enzyme'
// import Adapter from 'enzyme-adapter-react-16'
import MessageInput from '..'
import { shallowToJson } from 'enzyme-to-json'
import '../../../../../config/jest/enzyme.config'

describe('<MessageInput />', () => {
  beforeEach(() => {
    // configure({ adapter: new Adapter() })
  })
  test('renders <MessageInput /> component', () => {
    const wrapper = shallow(<MessageInput />)
    // console.log("wrapper", wrapper.instance().state)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
