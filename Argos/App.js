import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';

import LoginForm from './src/components/LoginForm';
import MenuPrincipal from './src/components/MenuPrincipal';

const AppNavigator = createStackNavigator({
  LoginFormScreen: {screen: LoginForm},
  MenuPrincipalScreen: {screen: MenuPrincipal}
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