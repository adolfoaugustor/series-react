import { createAppContainer, createStackNavigator } from 'react-navigation';

import LoginScreen from './src/pages/LoginScreen';

const AppNavigaitor = createStackNavigator({
  'Login':{
    screen:LoginScreen,
    navigationOptions:{
      title: 'Bem Vindo!'
    }
  },
}, {
  defaultNavigationOptions:{
    title:"Series",
    headerTintColor: '#000',  
    headerStyle:{
        backgroundColor: '#6ca2f7',
        borderBottomWidth:1,
        borderBottomColor: '#C5C5C5'
    },
    headerTitleStyle:{
      color: '#000',
      fontSize: 30,
    }
  }
});

const AppContainer = createAppContainer(AppNavigaitor);

export default AppContainer;
