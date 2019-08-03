import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';

import LoginForm from './src/components/LoginForm';

const AppNavigator = createStackNavigator({
  LoginFormScreen: {screen: LoginForm}
},
  {
    defaultNavigationOptions: {
      headerTintColor: '#FFFF',
      headerStyle: {
        backgroundColor: '#C0C0C0',
        borderWidth: 0
      }
    }
  }
);

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;