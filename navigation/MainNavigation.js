import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login/Login';
import SingIn from '../screens/SignIn/SingIn';
import Routes from './Routes';
import Home from '../screens/Home/Home';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{header: () => {}}}>
      <Stack.Screen name={Routes.Login} component={Login}></Stack.Screen>
      <Stack.Screen name={Routes.SignIn} component={SingIn}></Stack.Screen>
      <Stack.Screen name={Routes.Home} component={Home}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default MainNavigation;
