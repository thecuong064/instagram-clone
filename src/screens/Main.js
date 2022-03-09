import React from 'react';

import {SafeAreaView, View, Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './MainScreens/Home';
import Explore from './MainScreens/Explore';
import Favorite from './MainScreens/Favorite';
import Profile from './MainScreens/Profile';

const Tab = createBottomTabNavigator();

const TabIcon = props => {
  let {focusedIconSrc, defaultIconSrc, focused, title} = props;
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flex: 1,
      }}>
      <Image
        source={focused ? focusedIconSrc : defaultIconSrc}
        resizeMode="contain"
        style={{
          width: 25,
          height: 25,
        }}
      />
    </View>
  );
};

const Main = navigation => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: styles.tabBar,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon
              focusedIconSrc={require('../assets/tab_icons/ic_tab_home_selected.png')}
              defaultIconSrc={require('../assets/tab_icons/ic_tab_home.png')}
              focused={focused}
              title="Home"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon
              focusedIconSrc={require('../assets/tab_icons/ic_tab_explore_selected.png')}
              defaultIconSrc={require('../assets/tab_icons/ic_tab_explore.png')}
              focused={focused}
              title="Explore"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon
              focusedIconSrc={require('../assets/tab_icons/ic_tab_add.png')}
              defaultIconSrc={require('../assets/tab_icons/ic_tab_add.png')}
              focused={focused}
              title="Add"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon
              focusedIconSrc={require('../assets/tab_icons/ic_tab_fav_selected.png')}
              defaultIconSrc={require('../assets/tab_icons/ic_tab_fav.png')}
              focused={focused}
              title="Favorite"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon
              focusedIconSrc={require('../assets/tab_icons/ic_tab_profile_selected.png')}
              defaultIconSrc={require('../assets/tab_icons/ic_tab_profile.png')}
              focused={focused}
              title="Favorite"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    elevation: 0,
    borderTopColor: '#dbdbdb',
  },
  container: {
    backgroundColor: '#fefefe',
    flex: 1,
  },
});

export default Main;
