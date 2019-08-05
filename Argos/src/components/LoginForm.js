
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
        title: 'Bienvenido a Argos',
        headerTitleStyle:{
            fontWeight: 'bold',
            color: 'black'
        }
    };

    constructor(props) {
        super(props);
        this.state = {
            User: '',
            Pass: '',
            uri: "https://hidden-crag-54463.herokuapp.com",
            db: {
                user: 'a',
                pass: 'a'
            }

        };
    }
    
    render() {
        return (
            
            <View style={styles.form}>
                <View style={styles.container}>
                    <TextInput
                        style={styles.txtInputs}
                        value={this.state.User}
                        placeholder='Usuario'
                        placeholderTextColor='black'
                        onChangeText={(username) => this.setState({ User: username })}>
                    </TextInput>
                    <TextInput
                        style={styles.txtInputs}
                        value={this.state.Pass}
                        visible-password='false'
                        placeholder='Contraseña'
                        placeholderTextColor='black'
                        onChangeText={(contrasena) => this.setState({ Pass: contrasena })}>
                    </TextInput>  
                    <Text>Eres nuevo? Haz click <Text style={{color:'blue'}}
                                                    onPress={()=> this.goToRegistro()}>aquí</Text> </Text>
                </View> 

                <View style={styles.bottom}>
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
        const mythis = this;
        this.compruebaCredenciales(function(responseJSON){
            if(responseJSON.Login == true){
                mythis.props.navigation.navigate('MenuPrincipalScreen')
            }else{
                Alert.alert(
                    'Usuario o contraseña incorrecta',
                    '',
                    [
                        { text: 'OK', onPress: mythis.btnOK }
                    ]
                )
            }
        })

    }

    /*
    *   Author: Jaime Sarrión
    *   Method: compruebaCredenciales
    *   Description: Test if the user is in the database
    */ 
    compruebaCredenciales = (callback, callbackError) =>{
        const responseJSON = {
            Login: true
        }
        callback(responseJSON)
    }

    goToRegistro = () => {
        this.props.navigation.navigate('RegistroFormScreen')
    }
}


const styles = StyleSheet.create({
    form:{
        flex: 1,
        flexDirection: 'column',
        //backgroundColor: '#800000'
    },
    container:{
        height: '80%',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
       // backgroundColor: '#D2691E'
    },
    bottom:{
        height: '20%',
        alignItems:'center',
        justifyContent:'center'
    },
    boton: {
        width: 300,
        height: 60,
        backgroundColor: '#F1C40F',
        alignItems: 'center',
        justifyContent:'center',
        borderRadius: 10,
        borderWidth: 1
    },

    txtInputs: {
        height: 60,
        width: 250,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        padding: 20,
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: '#F1C40F',
        margin: 10,
    }

});

module.exports = LoginForm;