import { createAppContainer, createStackNavigator } from 'react-navigation';

import LoginScreen from './src/pages/LoginScreen';

const AppNavigaitor = createStackNavigator({
  'Login':{
    screen: LoginScreen,
    navigationOptions:{
      title: 'Bem Vindo!'
      //headerTitleStyle: {alignSelf: 'center', textAlign: 'center'},
    },
  },
}, {
  defaultNavigationOptions:{
    title:"Series",
    headerTintColor: 'white',  
    headerStyle:{
        backgroundColor: 'red',
        borderBottomWidth:1,
        borderBottomColor: '#C5C5C5'
    },
    headerTitleStyle:{
      color: 'white',
      fontSize: 30
    }
  }
});

const AppContainer = createAppContainer(AppNavigaitor);

export default AppContainer;
