import {call, put, fork, takeLatest} from 'redux-saga/effects';
import storyApi from '../../api/storyApi';
import postApi from '../../api/postApi';
import {
  loadStoriesFailed,
  loadStoriesSuccess,
  getMorePostsSuccess,
  getMorePostsFailed,
  reloadPostsSuccess,
  reloadPostsFailed,
} from './actions';
import ApiActionTypes from './constants';

const delay = ms => new Promise(res => setTimeout(res, ms));

export function* getStoriesAsync(props) {
  const {onSuccess, onFailed} = props;
  try {
    let response = yield call(storyApi.getAll);
    let data = response;
    yield put(loadStoriesSuccess(data));
    onSuccess?.(data);
  } catch (error) {
    yield put(loadStoriesFailed(error));
    console.log('getStoriesAsync error: ' + error);
    onFailed?.(error);
  }
}

export function* reloadPostsAsync(props) {
  const {params, onSuccess, onFailed} = props;
  try {
    let response = yield call(postApi.getAll, params);
    let data = response;
    yield put(reloadPostsSuccess(data));
    onSuccess?.(data);
  } catch (error) {
    yield put(reloadPostsFailed(error));
    console.log('reloadPostsAsync error: ' + error);
    onFailed?.(error);
  }
}

export function* getMorePostsAsync(props) {
  const {params, onSuccess, onFailed} = props;
  try {
    let response = yield call(postApi.getAll, params);
    let data = response;
    yield put(getMorePostsSuccess(data));
    onSuccess?.(data);
  } catch (error) {
    yield put(getMorePostsFailed(error));
    console.log('getMorePostsAsync error: ' + error);
    onFailed?.(error);
  }
}

function* getListCardWatch() {
  yield takeLatest(ApiActionTypes.GET_STORIES, getStoriesAsync);
  yield takeLatest(ApiActionTypes.RELOAD_POSTS, reloadPostsAsync);
  yield takeLatest(ApiActionTypes.GET_MORE_POSTS, getMorePostsAsync);
}

export default function* rootChild() {
  yield fork(getListCardWatch);
}
