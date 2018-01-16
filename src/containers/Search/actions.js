export const clearSearch = () => ({
  type: 'search:clear'
})

export const search = () => ({
  type: 'search:search'
})

export const setQuery = query => ({
  type: 'search:query',
  payload: query
})

export const zoom = index => ({
  type: 'search:zoom',
  payload: index
})
