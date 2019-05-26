import { createAppContainer, createStackNavigator } from 'react-navigation';

import LoginScreen from './src/pages/LoginScreen';
import SeriesPage from './src/pages/SeriesPage';

const AppNavigaitor = createStackNavigator({
  'Login':{
    screen: LoginScreen,
    navigationOptions:{
      title: 'Bem Vindo!'
    },
    'Main':{
      screen: SeriesPage
    }
  },
}, {
  defaultNavigationOptions:{
    title:"Series",
    headerTintColor: 'white',  
    headerStyle:{
        backgroundColor: 'black',
        borderBottomWidth:1,
        borderBottomColor: '#C5C5C5',
        textAlign: 'center'
    },
    headerTitleStyle:{
      color: 'white',
      fontSize: 30,
      textAlign: 'center'
    }
  }
});

const AppContainer = createAppContainer(AppNavigaitor);

export default AppContainer;
