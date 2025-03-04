import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home/Home';
import Login from '../screens/Login/Login';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{header: () => {}}}>
      <Stack.Screen name="Login" component={Login}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default MainNavigation;
