import { takeLatest } from 'redux-saga/effects'
import { getDemoRequestSaga } from './demoSaga'

import * as types from '../../const/actionTypes'

export default function* watchDemo() {
    yield takeLatest(types.GET_DEMO_REQUEST, getDemoRequestSaga);
}