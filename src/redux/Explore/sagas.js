import {call, put, fork, takeLatest} from 'redux-saga/effects';
import {
  reloadExplorePhotosFailed,
  reloadExplorePhotosSuccess,
  getMoreExplorePhotosFailed,
  getMoreExplorePhotosSuccess,
} from './actions';
import ApiActionTypes from './constants';
import exploreApi from '../../api/exploreApi';

export function* reloadExplorePhotosAsync(props) {
  const {params, onSuccess, onFailed} = props;
  try {
    let response = yield call(exploreApi.getExplorePhotos, params);
    let data = response;
    yield put(reloadExplorePhotosSuccess(data));
    onSuccess?.(data);
  } catch (error) {
    yield put(reloadExplorePhotosFailed(error));
    console.log('reloadExplorePhotosAsync error: ' + error);
    onFailed?.(error);
  }
}

export function* getMoreExplorePhotosAsync(props) {
  const {params, onSuccess, onFailed} = props;
  try {
    let response = yield call(exploreApi.getExplorePhotos, params);
    let data = response;
    yield put(getMoreExplorePhotosSuccess(data));
    onSuccess?.(data);
  } catch (error) {
    yield put(getMoreExplorePhotosFailed(error));
    console.log('getMoreExplorePhotosAsync error: ' + error);
    onFailed?.(error);
  }
}

function* getListCardWatch() {
  yield takeLatest(
    ApiActionTypes.RELOAD_EXPLORE_PHOTOS,
    reloadExplorePhotosAsync,
  );
  yield takeLatest(
    ApiActionTypes.GET_MORE_EXPLORE_PHOTOS,
    getMoreExplorePhotosAsync,
  );
}

export default function* rootChild() {
  yield fork(getListCardWatch);
}
