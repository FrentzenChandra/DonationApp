import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login/Login';
import SingIn from '../screens/SignIn/SingIn';
import Routes from './Routes';
import Home from '../screens/Home/Home';
import Donate from '../screens/Donate/Donate';

const Stack = createNativeStackNavigator();

export const Authincated = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.Home}
      screenOptions={{header: () => {}}}>
      <Stack.Screen name={Routes.Home} component={Home} />
      <Stack.Screen name={Routes.Donate} component={Donate} />
    </Stack.Navigator>
  );
};

export const UnAuthicated = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.Login}
      screenOptions={{header: () => {}}}>
      <Stack.Screen name={Routes.SignIn} component={SingIn} />
      <Stack.Screen name={Routes.Login} component={Login} />
    </Stack.Navigator>
  );
};
