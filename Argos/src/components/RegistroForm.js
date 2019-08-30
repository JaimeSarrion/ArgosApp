import React from 'react';

import {
    Text,
    View,
    StyleSheet,
    TextInput,
    ScrollView,
    TouchableHighlight,
    Alert,
} from 'react-native';


class RegistroForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            nombre: '',
            apellidos: '',
            email: '',
            dni: '',
            password: '',
            confirmacion: ''
        }
    }
    static navigationOptions = {
        header:null
    };
    render(){
        return(
            <View style={styles.wrapper}>
                <ScrollView contentContainerStyle={styles.container} minimumZoomScale={0.25}>
                    <Text style={styles.header}>- REGISTRO -</Text>
                    <TextInput
                        style={styles.txtInputs}
                        value={this.state.nombre}
                        placeholder='Nombre'
                        underlineColorAndroid='transparent'
                        onChangeText={(data) => this.setState({ nombre: data })}>
                    </TextInput>
                    <TextInput
                        style={styles.txtInputs}
                        value={this.state.apellidos}
                        placeholder='Apellidos'
                        underlineColorAndroid='transparent'
                        onChangeText={(data) => this.setState({ apellidos: data })}>
                    </TextInput>
                    <TextInput
                        style={styles.txtInputs}
                        value={this.state.email}
                        placeholder='email'
                        underlineColorAndroid='transparent'
                        onChangeText={(data) => this.setState({ email: data })}>
                    </TextInput>
                    <TextInput
                        style={styles.txtInputs}
                        value={this.state.dni}
                        placeholder='dni'
                        underlineColorAndroid='transparent'
                        onChangeText={(data) => this.setState({ dni: data })}>
                    </TextInput>
                    <TextInput
                        style={styles.txtInputs}
                        value={this.state.password}
                        placeholder='password'
                        underlineColorAndroid='transparent'
                        onChangeText={(data) => this.setState({ password: data })}>
                    </TextInput>
                    <TextInput
                        style={styles.txtInputs}
                        value={this.state.confirmacion}
                        placeholder='Repite contraseña'
                        underlineColorAndroid='transparent'
                        onChangeText={(data) => this.setState({ confirmacion: data })}>
                    </TextInput>
                    <TouchableHighlight
                        onPress={this.btnRegistro}
                        style={styles.boton} title="Aceptar">
                        <Text style={styles.textoBoton}>Log in</Text>
                    </TouchableHighlight>
                </ScrollView>
            </View>
        );
    }

    btnRegistro = () =>{
        if (this.state.confirmacion == this.state.password) {
            
        }else{
            Alert.alert(
                'Error',
                'Las contraseñas no coinciden',
                [
                  {text: 'OK', onPress: () => {
                        this.setState(password, '')
                        this.setState(confirmacion, '')
                    }},
                ],
                {cancelable: false},
              );
        }
    }
}

const styles = StyleSheet.create({

    wrapper:{
        flex: 1
    },
    header:{
        fontSize: 24,
        marginBottom: 40,
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


module.exports = RegistroForm