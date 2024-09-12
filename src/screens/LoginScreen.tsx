import {zodResolver} from '@hookform/resolvers/zod';
import React, {useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {z} from 'zod';

import CustomButton from '../components/CustomButton.tsx';
import Input from '../components/Input.tsx';
import {useAppDispatch} from '../hooks/useRedux.ts';
import {setUserAuthorized} from '../store/auth/slice.ts';

interface LoginScreenValues {
  email: string;
  password: string;
}
const validationSchema = z.object({
  email: z
    .string()
    .email('Please enter a valid email address')
    .min(1, 'Email is required'),
  password: z.string().min(8, 'Password length must be at least 8 characters'),
});

const LoginScreen = () => {
  const {control, handleSubmit} = useForm<LoginScreenValues>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(validationSchema),
  });
  const dispatch = useAppDispatch();

  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const onSubmit = () => {
    dispatch(setUserAuthorized());
  };
  const handleVisibleBtnPress = () => {
    setIsPasswordVisible(prevState => !prevState);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Controller
          name="email"
          control={control}
          render={({field: {value, onChange}, fieldState: {error}}) => (
            <Input
              placeholder="Enter login"
              value={value}
              setValue={onChange}
              error={error?.message}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({field: {value, onChange}, fieldState: {error}}) => (
            <Input
              placeholder="Enter password"
              value={value}
              setValue={onChange}
              error={error?.message}
              isSecret={!isPasswordVisible}
              rightComponent={
                <TouchableOpacity onPress={handleVisibleBtnPress}>
                  <Text>{isPasswordVisible ? 'Hide' : 'Show'}</Text>
                </TouchableOpacity>
              }
            />
          )}
        />

        <CustomButton onPress={handleSubmit(onSubmit)} text="Login" />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    flex: 1,
    justifyContent: 'center',
    gap: 30,
  },
});
export default LoginScreen;
