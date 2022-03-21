import {combineReducers} from 'redux';
import userReducer from './common/reducer';
import storiesReducer from './Home/storiesReducer';
import postsReducer from './Home/postsReducer';
import {persistReducer} from 'redux-persist';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import AsyncStorage from '@react-native-async-storage/async-storage';

const storiesPersistConfig = {
  key: '@redux-persist/stories',
  storage: AsyncStorage,
  whitelist: ['data'],
  stateReconciler: hardSet,
};

const postsPersistConfig = {
  key: '@redux-persist/posts',
  storage: AsyncStorage,
  whitelist: ['initData'],
  stateReconciler: hardSet,
};

const rootReducer = combineReducers({
  user: userReducer,
  stories: persistReducer(storiesPersistConfig, storiesReducer),
  posts: persistReducer(postsPersistConfig, postsReducer),
});

export default rootReducer;
