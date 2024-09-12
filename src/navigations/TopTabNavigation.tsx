import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import {Navigation} from '../constants/navigation.ts';
import FeedsScreen from '../screens/FeedsScreen.tsx';
import ProfileScreen from '../screens/ProfileScreen.tsx';

export type RootTabParamList = {
  [Navigation.FEEDS]: undefined;
  [Navigation.PROFILE]: undefined;
};

const Tab = createMaterialTopTabNavigator<RootTabParamList>();

const TopTabNavigation = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Tab.Navigator
        screenOptions={{
          swipeEnabled: false,
          tabBarStyle: {backgroundColor: '#e3e3e3'},
        }}>
        <Tab.Screen name={Navigation.FEEDS} component={FeedsScreen} />
        <Tab.Screen name={Navigation.PROFILE} component={ProfileScreen} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

export default TopTabNavigation;
