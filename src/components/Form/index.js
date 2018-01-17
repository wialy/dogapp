import React from 'react'

import PropTypes from 'prop-types'

import Input from '../Input/'
import Button from '../Button/'
import glamorous from 'glamorous'

import { mediaQueries } from '../../styles'

const Div = glamorous.div(({ enabled }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'stretch',
  pointerEvents: enabled ? 'all' : 'none',
  opacity: enabled ? 1 : 0.8,
  transition: 'all 0.3s ease-out',
  [mediaQueries.small]: {
    flexDirection: 'row'
  }
}))

class Form extends React.Component {
  onKeyPress = e => {
    if (e.key === 'Enter') {
      this.props.onSubmit()
    }
  }
  render() {
    const { query, onSubmit, enabled, onChange } = this.props
    return (
      <Div enabled={enabled}>
        <Input
          value={query}
          onChange={onChange}
          onKeyPress={enabled ? this.onKeyPress : void 0}
          placeholder={'Breed name'}
        />
        <Button onClick={enabled ? onSubmit : void 0}>Search</Button>
      </Div>
    )
  }
}

Form.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  query: PropTypes.string,
  enabled: PropTypes.bool
}

export default Form
