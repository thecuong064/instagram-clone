import {all, fork} from 'redux-saga/effects';
import HomeSagas from '../Home/sagas';

export default function* rootSaga() {
  yield all([fork(HomeSagas)]);
}
