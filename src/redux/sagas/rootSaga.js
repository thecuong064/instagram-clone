import {all, fork} from 'redux-saga/effects';
import HomeSagas from '../Home/sagas';
import ExploreSagas from '../Explore/sagas';

export default function* rootSaga() {
  yield all([fork(HomeSagas), fork(ExploreSagas)]);
}
