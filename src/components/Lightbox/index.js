import React, { Component } from 'react'
import PropTypes from 'prop-types'
import glamorous from 'glamorous'

const absolutePosition = {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
}

const Div = glamorous.div(absolutePosition, {
  pointerEvents: 'none',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  padding: 50
})

const Background = glamorous.div(absolutePosition, ({ visible }) => ({
  position: 'fixed',
  backgroundColor: '#0600FF',
  opacity: visible ? 0.65 : 0,
  pointerEvents: visible ? 'all' : 'none',
  transition: 'all 0.3s ease-out'
}))

const Modal = glamorous.div(
  {
    backgroundColor: 'white',
    borderRadius: 4,
    position: 'relative',
    padding: 15,
    flex: 1,
    maxHeight: '80%',
    borderRadius: '4px',
    display: 'flex',
    flexDirection: 'column'
  },
  ({ visible }) => ({
    pointerEvents: visible ? 'all' : 'none',
    opacity: visible ? 1 : 0,
    transform: visible ? void 0 : 'translateY(50px)',
    transition: 'all 0.3s ease-out'
  })
)

const ImageWrapper = glamorous.div({
  flex: 1,
  display: 'flex'
})

const Img = glamorous.img({
  width: '100%',
  height: '100%',
  objectFit: 'contain'
})

const Close = glamorous.img({
  width: 32,
  cursor: 'pointer',
  height: 32,
  alignSelf: 'flex-end',
  opacity: 0.65,
  marginBottom: 15
})

class Lightbox extends Component {
  render() {
    const { visible, image, close } = this.props
    return (
      <Div>
        <Background visible={visible} onClick={close} />
        <Modal visible={visible}>
          <Close src={require('./close.svg')} alt="X" onClick={close} />
          <ImageWrapper>{image && <Img src={image} alt="" />}</ImageWrapper>
        </Modal>
      </Div>
    )
  }
}

Lightbox.propTypes = {
  close: PropTypes.func.isRequired,
  image: PropTypes.string
}

export default Lightbox
