import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login/Login';
import SingIn from '../screens/SignIn/SingIn';
import Routes from './Routes';
import Home from '../screens/Home/Home';
import Donate from '../screens/Donate/Donate';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.Login}
      screenOptions={{header: () => {}}}>
      <Stack.Screen name={Routes.Login} component={Login}></Stack.Screen>
      <Stack.Screen name={Routes.SignIn} component={SingIn}></Stack.Screen>
      <Stack.Screen name={Routes.Home} component={Home}></Stack.Screen>
      <Stack.Screen name={Routes.Donate} component={Donate}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default MainNavigation;
