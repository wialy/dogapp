import immer from 'immer'

const initialState = {
  query: null,
  error: null,
  results: null,
  isSearching: false,
  zoom: null,
  zoomImage: null
}

export default (state = initialState, action) =>
  immer(state, draft => {
    switch (action.type) {
      case 'search:clear':
        Object.keys(initialState).map(k => (draft[k] = initialState[k]))
        break
      case 'search:query':
        draft.query = action.payload
        break

      case 'search:search':
        draft.error = null
        draft.isSearching = true
        draft.zoom = false
        draft.zoomImage = null
        break

      case 'search:error':
        draft.error = action.payload
        draft.results = null
        draft.isSearching = false
        break

      case 'search:success':
        draft.results = action.payload
        draft.isSearching = false
        break

      case 'search:zoom':
        draft.zoom = action.payload != null
        if (action.payload != null) {
          draft.zoomImage = action.payload
        }
        break
      // no default
    }
  })
