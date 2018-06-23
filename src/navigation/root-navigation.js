import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import { SignInScreen } from '../components/login'
import HomeScreen from '../components/home-screen'

const AppStack = createStackNavigator({ Home: HomeScreen });
const AuthStack = createStackNavigator({ SignIn: SignInScreen });

const RootStack = createSwitchNavigator(
  {
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'App',
  }
);

export default RootStack;