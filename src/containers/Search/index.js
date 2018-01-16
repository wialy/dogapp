import React, { Component } from 'react'
import { connect } from 'react-redux'
import glamorous from 'glamorous'

import { search, setQuery, zoom } from './actions'

import Form from '../../components/Form'
import Results from '../../components/Results'

const Container = glamorous.div({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
})

const Expandable = glamorous.div(({ expanded }) => ({
  flex: expanded ? 1 : 0,
  transition: 'all 0.3s ease-in-out',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden'
}))

const Error = glamorous.div({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#4A00FF'
})

class Search extends Component {
  onChange = e => {
    this.props.dispatch(setQuery(e.target.value))
  }
  onSubmit = () => {
    this.props.dispatch(search())
  }
  onClickImage = index => {
    this.props.dispatch(zoom(index))
  }
  render() {
    const { query, results, error, isSearching } = this.props.search
    const expanded = !!error || (results && results.length > 0)
    return (
      <Container>
        <Form
          query={query}
          enabled={!isSearching}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
        />
        <Expandable expanded={expanded}>
          {error && (
            <Error>
              {error}
              {' 😞 '}
            </Error>
          )}
          {results &&
            results.length > 0 && (
              <Results onClick={this.onClickImage} images={results} />
            )}
        </Expandable>
      </Container>
    )
  }
}

export default connect(({ search }) => ({ search }))(Search)
