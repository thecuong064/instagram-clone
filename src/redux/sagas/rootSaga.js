import {all, fork} from 'redux-saga/effects';
import ApiPractiesSagas from '../ApiPracties/sagas';

export default function* rootSaga() {
  yield all([fork(ApiPractiesSagas)]);
}
