import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';

import CustomButton from '../components/CustomButton.tsx';
import UserInfo from '../components/UserInfo.tsx';
import {useAppDispatch, useAppSelector} from '../hooks/useRedux.ts';
import {getAppState} from '../store/app/selectors.ts';
import {fetchUser} from '../store/app/thunks.ts';
import {resetAll} from '../store/reset.ts';

const ProfileScreen = () => {
  const dispatch = useAppDispatch();
  const {user} = useAppSelector(getAppState);

  const handleLogout = async () => {
    await AsyncStorage.clear();
    dispatch(resetAll());
  };

  useEffect(() => {
    const randomUserId = Math.floor(Math.random() * 10) + 1;
    dispatch(fetchUser(randomUserId));
  }, [dispatch]);
  return (
    <View style={styles.container}>
      <UserInfo user={user} />
      <CustomButton onPress={handleLogout} text="Logout" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginTop: 40,
    gap: 30,
  },
});
export default ProfileScreen;
