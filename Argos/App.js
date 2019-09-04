import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';

import LoginForm from './src/components/LoginForm';
import MenuPrincipal from './src/components/MenuPrincipal';
import RegistroForm from './src/components/RegistroForm'
import ListadoPacientes from './src/components/ListadoPacientes'
import DetallePaciente from './src/components/DetallePaciente'
import Paciente from './src/components/Paciente'


const AppNavigator = createStackNavigator({
  LoginFormScreen: {screen: LoginForm},
  MenuPrincipalScreen: {screen: MenuPrincipal},
  RegistroFormScreen: {screen: RegistroForm},
  ListadoPacientesScreen: {screen: ListadoPacientes},
  DetallePacienteScreen: {screen: DetallePaciente},
  PacienteScreen: {screen: Paciente}
},
  { 
    defaultNavigationOptions: {
      headerTintColor: '#FFFF',
      headerStyle: {
        backgroundColor: '#D1CE91',
        borderWidth: 0
      }
    }
  }
);

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;