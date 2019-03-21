import React from 'react'

// import Parse from 'parse/node'
import { shallow } from 'enzyme'

import Header from '..'
// import { expect } from 'chai';
// import sinon from 'sinon';

// import MyComponent from './MyComponent'
// import Foo from './Foo'

describe('<MyComponent />', () => {
  test('renders <Header /> component', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper).toMatchSnapshot()
  })

})
