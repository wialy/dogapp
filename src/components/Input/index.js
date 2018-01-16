import React from 'react'
import glamorous from 'glamorous'

import PropTypes from 'prop-types'
import { mediaQueries } from '../../styles'

const Div = glamorous.div({
  marginBottom: '1em',
  [mediaQueries.small]: {
    marginBottom: 0,
    marginRight: '1em'
  },
  position: 'relative',
  display: 'flex'
})

const Input = glamorous.input({
  padding: 0,
  fontSize: '1em',
  border: 'none',
  borderBottom: '1px solid #4835BC',
  width: '100%',
  height: '2em',
  [mediaQueries.small]: {
    width: 380,
    height: 'auto'
  },
  outline: 'none'
})

const Placeholder = glamorous.div(({ small }) => ({
  position: 'absolute',
  top: small ? 0 : '50%',
  left: 0,
  pointerEvents: 'none',
  fontSize: small ? 10 : 20,
  color: small ? '#999999' : '#CCCCCC',
  transition: 'all 0.3s ease-out',
  transform: small ? void 0 : 'translateY(-50%)'
}))

const InputWithPlaceholder = ({ placeholder, onChange, onKeyPress, value }) => (
  <Div>
    <Input onKeyPress={onKeyPress} onChange={onChange} value={value || ''} />
    {placeholder && <Placeholder small={!!value}>{placeholder}</Placeholder>}
  </Div>
)

InputWithPlaceholder.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func,
  placeholder: PropTypes.string
}

export default InputWithPlaceholder
