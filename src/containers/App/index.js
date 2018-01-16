import React, { Component } from 'react'

import { connect } from 'react-redux'

import Wrapper from '../../components/Wrapper/'
import Logo from '../../components/Logo/'
import Lightbox from '../../components/Lightbox/'

import Search from '../Search'

import { clearSearch, zoom } from '../Search/actions'

class App extends Component {
  closeLightbox = e => this.props.dispatch(zoom())
  onClickLogo = e => this.props.dispatch(clearSearch())
  render() {
    const { zoom, zoomImage, results } = this.props.search
    return (
      <Wrapper>
        <Logo onClick={this.onClickLogo} />
        <Search />
        <Lightbox
          visible={zoom}
          image={zoomImage != null ? results[zoomImage] : void 0}
          close={this.closeLightbox}
        />
      </Wrapper>
    )
  }
}

export default connect(({ search }) => ({ search }))(App)
