import React from 'react'
import { shallow } from 'enzyme'

import Form from '../'

import sinon from 'sinon'

describe('Form', () => {
  const query = 'testQuery'
  const onSubmit = () => {}
  const onChange = () => {}
  const enabled = true

  const getElement = () =>
    shallow(
      <Form
        enabled={enabled}
        query={query}
        onChange={onChange}
        onSubmit={onSubmit}
      />
    )
      .first()
      .shallow()

  it('renders correctly', () => {
    expect(getElement()).toMatchSnapshot()
  })

  it('contains exactly one <InputWithPlaceholder />', () => {
    expect(getElement().find('InputWithPlaceholder').length).toBe(1)
  })

  it('contains exactly one <Button />', () => {
    expect(getElement().find('Button').length).toBe(1)
  })

  it('passes "query" property as "value" to <InputWithPlaceholder />', () => {
    expect(
      getElement()
        .find('InputWithPlaceholder')
        .first()
        .props().value
    ).toBe(query)
  })

  it('can not submit when disabled', () => {
    const onClickSpy = sinon.spy()

    const el = shallow(
      <Form enabled={false} onSubmit={onClickSpy} onChange={onChange} />
    )
    el
      .find('Button')
      .first()
      .simulate('click')

    expect(onClickSpy.called).toEqual(false)
  })

  it('passes onSubmit and onChange handers to <Button /> and <InputWithPlaceholder />', () => {
    const el = getElement()

    expect(
      el
        .find('InputWithPlaceholder')
        .first()
        .props().onChange
    ).toEqual(onChange)

    expect(
      el
        .find('Button')
        .first()
        .props().onClick
    ).toEqual(onSubmit)
  })
})
