import React from 'react'

// import Parse from 'parse/node'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import MessageInput from '..'
import { shallowToJson } from 'enzyme-to-json'
import '../../../../../config/jest/enzyme.config'

// import { expect } from 'chai';
// import sinon from 'sinon';

// import MyComponent from './MyComponent'
// import Foo from './Foo'

describe('<MessageInput />', () => {
  beforeEach(() => {
    configure({ adapter: new Adapter() })
  })
  test('renders <Header /> component', () => {
    const wrapper = shallow(<MessageInput />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

})
