import {call, put, fork, takeLatest} from 'redux-saga/effects';
import photosApi from '../../api/photosApi';
import {loadImagesFailed, loadImagesSuccess} from './actions';
import ApiActionTypes from './constants';

const delay = ms => new Promise(res => setTimeout(res, ms));

export function* getImagesAsync() {
  try {
    yield put(loadImagesSuccess([]));
    let response = yield call(photosApi.getAll);
    let data = response;
    yield delay(1000);
    yield put(loadImagesSuccess(data));
  } catch (error) {
    yield delay(1000);
    yield put(loadImagesFailed(error));
    console.log('getImagesAsync error: ' + error);
  }
}

function* getListCardWatch() {
  yield takeLatest(ApiActionTypes.GET_IMAGES, getImagesAsync);
}

export default function* rootChild() {
  yield fork(getListCardWatch);
}
