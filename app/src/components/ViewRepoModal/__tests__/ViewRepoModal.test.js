import React from 'react'

// import Parse from 'parse/node'
import { shallow } from 'enzyme'

import ViewRepoModal from '..'
import { shallowToJson } from 'enzyme-to-json'
import '../../../../../config/jest/enzyme.config'
// import { expect } from 'chai';
// import sinon from 'sinon';

// import MyComponent from './MyComponent'
// import Foo from './Foo'

describe('<MyComponent />', () => {
  test('renders <ViewRepoModal /> component', () => {
    const wrapper = shallow(<ViewRepoModal />)
    console.log('test component repo modal >>', wrapper)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
