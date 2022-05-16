import {combineReducers} from 'redux';
import userReducer from './common/reducer';
import storiesReducer from './Home/storiesReducer';
import postsReducer from './Home/postsReducer';
import photosReducer from './Explore/photosReducer';
import {persistReducer} from 'redux-persist';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {modalReducer} from './common/reducers/modalReducer';

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

const explorePhotosPersistConfig = {
  key: '@redux-persist/explore-photos',
  storage: AsyncStorage,
  whitelist: ['initData'],
  stateReconciler: hardSet,
};

const rootReducer = combineReducers({
  user: userReducer,
  stories: persistReducer(storiesPersistConfig, storiesReducer),
  posts: persistReducer(postsPersistConfig, postsReducer),
  explorePhotos: persistReducer(explorePhotosPersistConfig, photosReducer),
  modal: modalReducer,
});

export default rootReducer;
