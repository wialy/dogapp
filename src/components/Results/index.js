import React from 'react'
import glamorous from 'glamorous'
import PropTypes from 'prop-types'
import lerp from 'lerp'

import resizeEvent, { unbind } from 'element-resize-event'

import { Collection } from 'react-virtualized'

const Cell = glamorous.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})

const Img = glamorous.img({
  width: '90%',
  height: '90%',
  objectFit: 'cover'
})

class Results extends React.Component {
  state = {
    width: 0,
    height: 0,
    cellWidth: 150,
    columnCount: 5
  }

  onClick = e => {
    this.props.onClick(e.currentTarget.dataset.index)
  }

  cellRenderer = ({ index, key, style }) => (
    <Cell key={key} style={style} data-index={index} onClick={this.onClick}>
      <Img src={this.props.images[index]} />
    </Cell>
  )

  cellSizeAndPositionGetter = ({ index }) => ({
    x: (index % this.state.columnCount) * this.state.cellWidth,
    y: Math.floor(index / this.state.columnCount) * this.state.cellWidth,
    width: this.state.cellWidth,
    height: this.state.cellWidth
  })

  measure = el => {
    if (this.el) {
      unbind(this.el)
    }
    if (el) {
      this.el = el
      resizeEvent(this.el, () => {
        const { offsetHeight, offsetWidth } = this.el
        this.setState({
          columnCount: Math.floor(lerp(1, 6, offsetWidth / 1280)),
          width: offsetWidth,
          height: offsetHeight,
          cellWidth: offsetWidth / this.state.columnCount
        })
      })
    }
  }

  componentWillUnmount() {
    if (this.el) {
      unbind(this.el)
      delete this.el
    }
  }

  render() {
    const { images } = this.props
    const { width, height } = this.state

    return (
      <div style={{ flex: 1, marginTop: '1em' }} ref={this.measure}>
        <Collection
          key={`collection-${width}x${height}`}
          width={width}
          style={{ outline: 'none' }}
          height={height}
          cellCount={images.length}
          cellRenderer={this.cellRenderer}
          cellSizeAndPositionGetter={this.cellSizeAndPositionGetter}
        />
      </div>
    )
  }
}

Results.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired
}

export default Results
