import React from 'react'
import { shallow } from 'enzyme'

import Button from '../'

import sinon from 'sinon'

describe('Button', () => {
  it('renders correctly', () => {
    expect(
      shallow(<Button />)
        .first()
        .shallow()
    ).toMatchSnapshot()
  })

  it('renders a div', () => {
    const div = shallow(<Button />)
      .first()
      .shallow()
      .find('div')

    expect(div.length).toBeGreaterThan(0)
  })

  it('contains all passed nodes as children', () => {
    const children = <span>Push me</span>
    const el = shallow(<Button>{children}</Button>)
      .first()
      .shallow()

    expect(el.children()).toEqual(shallow(children))
  })

  it('does not pass any props to children', () => {
    const children = <span />
    const el = shallow(<Button>{children}</Button>)
      .first()
      .shallow()

    expect(Object.keys(el.children().props()).length).toBe(0)
  })

  it('accepts props', () => {
    const el = shallow(<Button prop="test1" />)

    expect(el.props().prop).toEqual('test1')
    el.setProps({ prop: 'test2' })
    expect(el.props().prop).toEqual('test2')
  })

  it('calls an onClick handler when clicked', () => {
    const onClick = sinon.spy()

    const el = shallow(<Button onClick={onClick} />)
    el.simulate('click')

    expect(onClick.calledOnce).toEqual(true)
  })
})
