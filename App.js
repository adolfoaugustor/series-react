import { createAppContainer, createStackNavigator } from 'react-navigation';

import LoginScreen from './src/pages/LoginScreen';
import SeriesPage from './src/pages/SeriesPage';

const AppNavigaitor = createStackNavigator({
  'Login':{
    screen: LoginScreen,
    navigationOptions:{
      headerTitleStyle: {
        textAlign:"center", 
        flex:1  
      },
      title: 'Bem Vindo!',
    }
  },
  'Main':{
    screen: SeriesPage
  }
}, {
  defaultNavigationOptions:{
    title:"Series",
    headerTintColor: 'white',  
    headerStyle:{
        backgroundColor: 'blue',
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
