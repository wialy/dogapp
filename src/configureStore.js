import { createStore, applyMiddleware, compose, combineReducers } from 'redux'

import createSagaMiddleware from 'redux-saga'

import searchReducer from './containers/Search/reducer'
import searchSaga from './containers/Search/sagas'

export default function configureStore() {
  const composeEnhancers =
    process.env.NODE_ENV === 'development' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : compose

  const sagaMiddleware = createSagaMiddleware()
  const middlewares = [sagaMiddleware]
  const enhancers = [applyMiddleware(...middlewares)]
  const reducers = combineReducers({
    search: searchReducer
  })
  const store = createStore(reducers, composeEnhancers(...enhancers))

  sagaMiddleware.run(searchSaga)

  return store
}
