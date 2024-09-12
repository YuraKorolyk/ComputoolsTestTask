import React, {FC} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import {IUser} from '../store/app/types.ts';

interface UserInfoProps {
  user: IUser;
}
const UserInfo: FC<UserInfoProps> = ({user}) => {
  if (!user) return;
  return (
    <View style={styles.container}>
      <Image source={{uri: user?.avatar}} style={styles.image} />
      <View>
        <Text>Name: {user?.first_name}</Text>
        <Text>Email: {user?.email}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e3e3e3',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});
export default UserInfo;
