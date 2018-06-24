import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import { SignInScreen } from '../components/login';
import HomeScreen from '../components/home-screen';
import WorkDates from '../components/work-dates';
import AadtiaList from '../components/aadtia';

const AppStack = createStackNavigator({ Home: HomeScreen, dates: WorkDates, aadtia:AadtiaList });
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