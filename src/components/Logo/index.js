import React from 'react'
import glamorous from 'glamorous'
import PropTypes from 'prop-types'

const Div = glamorous.div({
  color: '#4A4A4A',
  alignSelf: 'flex-start',
  cursor: 'pointer',
  marginBottom: '1em'
})

const Span = glamorous.span({
  color: '#D200E5'
})

const Logo = ({ onClick }) => (
  <Div onClick={onClick}>
    <Span>Dog</Span>App
  </Div>
)

Logo.propTypes = {
  onClick: PropTypes.func
}

export default Logo
