import React from 'react'
import glamorous from 'glamorous'

const Wrapper = glamorous.div({
  flex: 1,
  display: 'flex',
  flexDirection: 'column'
})

export default ({ children, ...props }) => (
  <Wrapper {...props}>{children}</Wrapper>
)
