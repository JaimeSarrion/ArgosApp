
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
            uri: "https://hidden-crag-54463.herokuapp.com"
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
                        placeholder='Contraseña'
                        placeholderTextColor='black'
                        onChangeText={(contrasena) => this.setState({ Pass: contrasena })}>
                    </TextInput>  
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

    btnLogin = () => {


    }
}


const styles = StyleSheet.create({
    form:{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#800000'
    },
    container:{
        height: '80%',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D2691E'
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