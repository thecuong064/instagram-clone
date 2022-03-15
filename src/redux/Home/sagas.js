import {call, put, fork, takeLatest} from 'redux-saga/effects';
import storyApi from '../../api/storyApi';
import postApi from '../../api/postApi';
import {
  loadStoriesFailed,
  loadStoriesSuccess,
  loadPostsFailed,
  loadPostsSuccess,
} from './actions';
import ApiActionTypes from './constants';

const delay = ms => new Promise(res => setTimeout(res, ms));

export function* getStoriesAsync() {
  try {
    let response = yield call(storyApi.getAll);
    let data = response;
    yield put(loadStoriesSuccess(data));
  } catch (error) {
    yield put(loadStoriesFailed(error));
    console.log('getStoriesAsync error: ' + error);
  }
}

export function* getPostsAsync() {
  try {
    let response = yield call(postApi.getAll);
    let data = response;
    yield put(loadPostsSuccess(data));
  } catch (error) {
    yield put(loadPostsFailed(error));
    console.log('getPostsAsync error: ' + error);
  }
}

function* getListCardWatch() {
  yield takeLatest(ApiActionTypes.GET_STORIES, getStoriesAsync);
  yield takeLatest(ApiActionTypes.GET_POSTS, getPostsAsync);
}

export default function* rootChild() {
  yield fork(getListCardWatch);
}
