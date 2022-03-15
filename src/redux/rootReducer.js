import {combineReducers} from 'redux';
import userReducer from './common/reducer';
import storiesReducer from './Home/storiesReducer';
import postsReducer from './Home/postsReducer';

const rootReducer = combineReducers({
  user: userReducer,
  stories: storiesReducer,
  posts: postsReducer,
});

export default rootReducer;
