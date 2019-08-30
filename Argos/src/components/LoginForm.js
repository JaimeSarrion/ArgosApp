
import React from 'react';
import { fetch } from 'fetch-awesome';

import {
    StyleSheet,
    Text,
    AsyncStorage,
    View,
    TouchableHighlight,
    TextInput,
    Alert,
} from 'react-native';


class LoginForm extends React.Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            User: '',
            Pass: '',
            uri: 'http://jaimesarrion.freemyip.com:10000',
        };
    }
    
    render() {
        return (
            
            <View style={styles.wrapper}>
                <View style={styles.container}>
                    <Text style={styles.header}>- LOGIN -</Text>
                    <TextInput
                        style={styles.txtInputs}
                        value={this.state.User}
                        placeholder='Email'
                        underlineColorAndroid='transparent'
                        onChangeText={(email) => this.setState({ User: email })}>
                    </TextInput>
                    <TextInput
                        style={styles.txtInputs}
                        value={this.state.Pass}
                        visible-password='false'
                        placeholder='Contraseña'
                        underlineColorAndroid='transparent'
                        onChangeText={(contrasena) => this.setState({ Pass: contrasena })}>
                    </TextInput>  
                    <Text>Eres nuevo? Haz click <Text style={{color:'blue'}}
                                                    onPress={()=> this.goToRegistro()}>aquí</Text> 
                    </Text>
                    <TouchableHighlight
                        onPress={this.btnLogin}
                        style={styles.boton} title="Aceptar">
                        <Text style={styles.textoBoton}>Log in</Text>
                    </TouchableHighlight>
                </View> 
            </View>
        );
    }

    /*
    *   Author: Jaime Sarrión
    *   Method: btnLogin
    *   Description: Action from the login button
    */ 
    btnLogin = () => {
        this.login(function(response){
            let user = response[0]
            if (!user.error) {
                AsyncStorage.setItem('user', JSON.stringify(user))
            }else{
                Alert.alert(
                    'Error',
                    'Ha habido un problema en la base de datos',
                    [
                      {text: 'OK', onPress: () => console.log('OK Pressed')},
                    ],
                    {cancelable: false},
                  );
            }
        }, function(error){
            Alert.alert(
                'Error',
                'Los datos proporcionados no son correctos',
                [
                  {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                {cancelable: false},
              );
        })
    }

    /*
    *   Author: Jaime Sarrión
    *   Method: login
    *   Description: Call for log in at the API
    */ 
    login = (callback, callbackError) =>{
        return fetch(this.state.uri + '/login',{
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json' 
            },
            body: JSON.stringify ({
                email: this.state.User,
                password: this.state.Pass
            }),
            timeout: 5000,
            retries: 0
        }).then((data)=> {
            return data.json()
        }).then((response)=>{
            callback(response)
        }).catch(function(error){
            callbackError(error)
        })
    }
    /*
    *   Author: Jaime Sarrión
    *   Method: goToRegistro
    *   Description: Go to the register screen
    */ 
    goToRegistro = () => {
        this.props.navigation.navigate('RegistroFormScreen')
    }
}


const styles = StyleSheet.create({

    wrapper:{
        flex: 1
    },
    header:{
        fontSize: 24,
        marginBottom: 60,
        color: '#fff',
        fontWeight: 'bold'
    },
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2893d3',
        paddingLeft: 40,
        paddingRight: 40,
    },
    txtInputs: {
        alignSelf: 'stretch',
        padding: 16,
        marginBottom: 20,
        backgroundColor: '#fff'
    },
    boton: {
        alignSelf: 'stretch',
        padding: 20,
        alignItems:'center',
        backgroundColor: '#01c853',
    }

});

module.exports = LoginForm;