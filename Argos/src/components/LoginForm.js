
import React from 'react';
import { fetch } from 'fetch-awesome';

import {
    StyleSheet,
    Text,
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
            db: {
                user: 'a',
                pass: 'a'
            }

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
                        onChangeText={(username) => this.setState({ User: username })}>
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
                        <Text style={styles.textoBoton}>Aceptar</Text>
                    </TouchableHighlight>
                </View> 
            </View>
        );
    }

    /*
    *   Author: Jaime Sarrión
    *   Method: btnLogin
    *   Description: Creates an alert when the user is incorrect
    */ 

    btnLogin = () => {
        this.login(function(response){
            console.log(response[0])
        }, function(error){
            console.log("ERROR: " + error)
        })
    }

    /*
    *   Author: Jaime Sarrión
    *   Method: compruebaCredenciales
    *   Description: Test if the user is in the database
    */ 
    login = (callback, callbackError) =>{
        return fetch(this.state.uri + '/login',{
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json' 
            },
            body: JSON.stringify ({
                email: 'jaime@gmail.com',
                password: 'contraseña'
            }),
            timeout: 5000,
            retries: 0
        }).then((data)=> {
            return data.json()
        }).then((response)=>{
            callback(response)
        }).catch(function(error){
            console.log('Algo salio mal...')
            callbackError(error)
        })
    }

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
        backgroundColor: '#FFF0B5',
    }

});

module.exports = LoginForm;