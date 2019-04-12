import React from 'react'
// import Parse from 'parse/node'
import { shallow } from 'enzyme'
// import Adapter from 'enzyme-adapter-react-16'
import Header from '..'
import { shallowToJson } from 'enzyme-to-json'
import '../../../../../config/jest/enzyme.config'

describe('<Header />', () => {
  beforeEach(() => {
    // configure({ adapter: new Adapter() })
  })
  test('renders <Header /> component', () => {
    const wrapper = shallow(<Header />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
