import AsyncStorage from '@react-native-async-storage/async-storage';
import LocalStorgeKeys from '../constants/LocalStorgeKeys';

const LocalStorageUtils = {
  storePosts: async newPosts => {
    try {
      const jsonValue = JSON.stringify(newPosts);
      await AsyncStorage.setItem(LocalStorgeKeys.POSTS, jsonValue);
    } catch (e) {
      console.log('Error when storePosts: ' + e);
    }
  },
  getPosts: async () => {
    console.log('Start getPosts');
    try {
      const jsonValue = await AsyncStorage.getItem(LocalStorgeKeys.POSTS);
      return jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch (e) {
      console.log('Error when getPosts: ' + e);
    } finally {
    }
  },
  storeStories: async newStories => {
    try {
      const jsonValue = JSON.stringify(newStories);
      await AsyncStorage.setItem(LocalStorgeKeys.STORIES, jsonValue);
    } catch (e) {
      console.log('Error when storeStories: ' + e);
    }
  },
  getStories: async () => {
    console.log('Start getStories');
    try {
      const jsonValue = await AsyncStorage.getItem(LocalStorgeKeys.STORIES);
      return jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch (e) {
      console.log('Error when getStories: ' + e);
    } finally {
    }
  },
};

export default LocalStorageUtils;
