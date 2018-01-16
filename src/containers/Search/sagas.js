import { select, call, put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'

const search = breed =>
  axios
    .get(`https://dog.ceo/api/breed/${breed.toLowerCase()}/images`)
    .then(response => response.data)

const getQuery = state => state.search.query

function* fetchResults(action) {
  try {
    const breed = yield select(getQuery)

    if (!breed) throw new Error('Please provide a breed name')

    const result = yield call(search, breed)

    if (result.status === 'success') {
      yield put({ type: 'search:success', payload: result.message })
    } else {
      throw new Error(result.message)
    }
  } catch (e) {
    yield put({ type: 'search:error', payload: e.message })
  }
}

function* searchSaga() {
  yield takeLatest('search:search', fetchResults)
}

export default searchSaga
