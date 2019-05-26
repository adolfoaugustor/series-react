import React from 'react';
import { 
    View,
    TextInput,
    Text,
    StyleSheet,
    Button,
    ActivityIndicator,
    Alert,
} from 'react-native';
import firebase from '@firebase/app';
import '@firebase/auth';

import FormRow from '../components/FormRow';

export default class LoginPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            mail:'',
            password:'',
            isLoading:false,
            message:'',
        }
    }

    componentDidMount(){
        var firebaseConfig = {
            apiKey: "AIzaSyC_Qxme0AxVv21vrJLC3tC40M7mliq7Z_k",
            authDomain: "sincere-etching-197413.firebaseapp.com",
            databaseURL: "https://sincere-etching-197413.firebaseio.com",
            projectId: "sincere-etching-197413",
            storageBucket: "sincere-etching-197413.appspot.com",
            messagingSenderId: "659956499366",
            appId: "1:659956499366:web:dac5bb2880d29ffc"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
    };

    onChangeHandler(field, value){
        this.setState({
            [field]: value
        });
    }

    tryLogin(){
        this.setState({ isLoading: true, message:'' });
        const { mail, password } = this.state;

        loginUserSuccess = user => {
            this.setState({message: "Sucesso!"});
            this.props.navigation.navigate('Main');
        }
        
        loginUserFailed = error => {
            this.setState({ 
                message: this.getMessageByErrorCode(error.code)
            });
        }

        firebase.auth()
            .signInWithEmailAndPassword(mail, password)
            .then(loginUserSuccess)
            .catch(error => {
                if (error.code === 'auth/user-not-found') {
                    Alert.alert(
                        'Usuário não encontrado',
                        'Deseja criar um cadastro para acesso com as informações inseridas?', 
                        [{
                            text: 'Não',
                            // onPress: () => {}
                            style: 'cancel' //IOS
                        }, {
                            text:'Sim',
                            onPress: () => {
                                firebase
                                    .auth()
                                    .createUserWithEmailAndPassword(mail, password)
                                    .then(loginUserSuccess)
                                    .catch(loginUserFailed)
                            }
                        }],
                        { cancelable : false }
                    )
                    return;
                }

                loginUserFailed(error);
            })
            .then(()=> this.setState({ isLoading: false }) );
    }

    getMessageByErrorCode(errorCode){
        switch(errorCode){
            case 'auth/wrong-password':
                return 'Senha Incorreta';
            case 'auth/user-not-found':
                return 'Usuário não encontrado';
            case 'auth/invalid-action-code':
                return 'Código de ação de autenticação / inválido';
            case 'auth/expired-action-code':
                return 'Código de autenticação expirado';
            default:
                return 'Error code 301...';
        }  
    }

    renderMessage(){
        const {message} = this.state;
        if(!message)
            return null;
        return (
            <View>
                <Text>{message}</Text>
            </View>
        );
    }

    renderButton(){
        if(this.state.isLoading)
            return <ActivityIndicator />;
        return(
            <Button 
            title="Entrar" 
            onPress={() => this.tryLogin()}/>
        );
    }

    render(){
        return (
            <View style={styles.container}>
                <FormRow first>
                    <TextInput 
                        style={styles.input}
                        placeholder="user@mail.com"
                        value={this.state.mail}
                        onChangeText={value => this.onChangeHandler('mail', value)}
                    />
                </FormRow>
                <FormRow last>
                    <TextInput 
                        style={styles.input}
                        placeholder="******"
                        secureTextEntry
                        value={this.state.password}
                        onChangeText={value => this.onChangeHandler('password', value)}
                    />
                </FormRow>
                { this.renderButton() }
                { this.renderMessage() }
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        paddingLeft:10,
        paddingRight:10,
    },
    input:{
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 5,
    }
});