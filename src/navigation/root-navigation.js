import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import { SignInScreen } from '../components/login'
import HomeScreen from '../components/home-screen'
import WorkDates from '../components/work-dates'

const AppStack = createStackNavigator({ Home: HomeScreen, dates: WorkDates });
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