import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Navigation} from '../constants/navigation.ts';
import {useAppSelector} from '../hooks/useRedux.ts';
import LoginScreen from '../screens/LoginScreen.tsx';
import {getIsAuthorized} from '../store/auth/selectors.ts';
import TopTabNavigation from './TopTabNavigation.tsx';

export type RootStackParamList = {
  [Navigation.LOGIN]: undefined;
  [Navigation.TOP_TAB_NAVIGATION]: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigation = () => {
  const isAuthorized = useAppSelector(getIsAuthorized);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{contentStyle: {backgroundColor: '#e3e3e3'}}}
        initialRouteName={Navigation.LOGIN}>
        {!isAuthorized ? (
          <Stack.Screen
            name={Navigation.LOGIN}
            component={LoginScreen}
            options={{headerShown: false}}
          />
        ) : (
          <Stack.Screen
            name={Navigation.TOP_TAB_NAVIGATION}
            component={TopTabNavigation}
            options={{headerShown: false}}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
