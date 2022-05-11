import React, {useState} from 'react';

import {View, Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Explore, Favorite, Profile} from '../screens/MainScreens';
import {LocalResources} from '../constants/LocalResources';

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

const Modals = {
  None: 'None',
  SourceOptions: 'SourceOptions',
};

const NullView = () => {
  return null;
};

const MainBottomTab = ({navigation, route}) => {
  const [visibleModal, setVisibleModal] = useState(Modals.None);

  const showModal = modal => {
    if (!Object.values(Modals).includes(modal)) {
      return;
    }
    setVisibleModal(modal);
  };

  const dismissModals = () => {
    setVisibleModal(Modals.None);
  };

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
              focusedIconSrc={LocalResources.TabIcons.ic_tab_home_selected}
              defaultIconSrc={LocalResources.TabIcons.ic_tab_home}
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
              focusedIconSrc={LocalResources.TabIcons.ic_tab_explore_selected}
              defaultIconSrc={LocalResources.TabIcons.ic_tab_explore}
              focused={focused}
              title="Explore"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={NullView}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon
              focusedIconSrc={LocalResources.TabIcons.ic_tab_add}
              defaultIconSrc={LocalResources.TabIcons.ic_tab_add}
              focused={focused}
              title="Add"
            />
          ),
        }}
        listeners={({navigation}) => ({
          tabPress: e => {
            e.preventDefault();
            navigation.navigate('UploadingOptionsModal');
          },
        })}
      />
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon
              focusedIconSrc={LocalResources.TabIcons.ic_tab_fav_selected}
              defaultIconSrc={LocalResources.TabIcons.ic_tab_fav}
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
              focusedIconSrc={LocalResources.TabIcons.ic_tab_profile_selected}
              defaultIconSrc={LocalResources.TabIcons.ic_tab_profile}
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

export default MainBottomTab;
