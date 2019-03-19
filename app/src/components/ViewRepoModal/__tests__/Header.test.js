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

  //   it('renders an `.icon-star`', () => {
  //     const wrapper = shallow(<MyComponent />)
  //     expect(wrapper.find('.icon-star')).to.have.lengthOf(1)
  //   })

  //   it('renders children when passed in', () => {
  //     const wrapper = shallow((
  //       <MyComponent>
  //         <div className="unique" />
  //       </MyComponent>
  //     ));
  //     expect(wrapper.contains(<div className="unique" />)).to.equal(true)
  //   })

  //   describe('fetchMembersIsLoading', () => {
  //     test('returns true when fetching members', () => {
  //       const spaceId = 'spaceId3'
  //       const isLoading = fetchMembersIsLoading(state, spaceId)
  //       expect(isLoading).toBeTruthy()
  //     })

  //     test('returns false when page is not found', () => {
  //       const spaceId = 'not a space id'
  //       const isLoading = fetchMembersIsLoading(state, spaceId)
  //       expect(isLoading).toBeFalsy()
  //     })
})
