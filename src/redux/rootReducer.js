import {combineReducers} from 'redux';
import userReducer from './common/reducer';
import imagesReducer from './ApiPracties/reducer';

const rootReducer = combineReducers({
  user: userReducer,
  images: imagesReducer,
});

export default rootReducer;
