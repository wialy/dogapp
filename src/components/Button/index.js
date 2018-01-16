import React from 'react'
import glamorous from 'glamorous'

import PropTypes from 'prop-types'

const Div = glamorous.div({
  borderRadius: 4,
  fontSize: '0.75em',
  padding: '1em 3em',
  textTransform: 'uppercase',
  backgroundColor: '#4A00FF',
  color: 'white',
  cursor: 'pointer',
  textAlign: 'center'
})

const Button = ({ onClick, children, ...props }) => (
  <Div {...props} onClick={onClick}>
    {children}
  </Div>
)

Button.propTypes = {
  onClick: PropTypes.func
}

export default Button
