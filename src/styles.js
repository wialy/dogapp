import { css } from 'glamor'

css.global('html, body', {
  margin: 0,
  padding: 0,
  height: '100%',
  fontSize: 24
})

css.global('body', {
  padding: '1em',
  boxSizing: 'border-box',
  fontFamily: css.fontFace({
    fontFamily: 'Rubik'
  })
})

css.global('#root', {
  height: '100%',
  display: 'flex',
  flexDirection: 'column'
})

export const mediaQueries = {
  small: '@media only screen and (min-width: 640px)'
}
