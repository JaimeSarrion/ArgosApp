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
                        autoCapitalize="none"
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
                        autoCapitalize="none"
                        underlineColorAndroid='transparent'
                        onChangeText={(data) => this.setState({ password: data })}>
                    </TextInput>
                    <TextInput
                        style={styles.txtInputs}
                        value={this.state.confirmacion}
                        placeholder='Repite contraseña'
                        autoCapitalize="none"
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
        const mythis = this
        if (this.state.confirmacion == this.state.password) {
            if (this.state.nombre != '' && this.state.apellidos != '' && this.state.dni != '' && this.state.email != '' && this.state.password != '' ) {
                this.compruebaUsuario(function(response){
                    console.log(response) 
                    if (response.error) {
                        this.registraUsuario(function(response){
                            if (!response.error) {
                                AsyncStorage.setItem('user', JSON.stringify(user ={
                                    User: this.state.email,
                                    Pass: this.state.password
                                }))
                                mythis.props.navigation.navigate('MenuPrincipalScreen')
                                Alert.alert(
                                    'OK',
                                    'Te has registrado con exito',
                                    [
                                      {text: 'OK', onPress: () => {}},
                                    ],
                                    {cancelable: false},
                                  );
                            }
                        },function(error){
                            Alert.alert(
                                'Error',
                                'Se ha producido un error en el servidor, intentalo mas tarde',
                                [
                                  {text: 'OK', onPress: () => {}},
                                ],
                                {cancelable: false},
                              );
                        })
                    }else{
                        Alert.alert(
                            'Error',
                            'El usuario ya esta en la BD',
                            [
                              {text: 'OK', onPress: () => {}},
                            ],
                            {cancelable: false},
                          );
                    }
                },function(error){
                    Alert.alert(
                        'Error',
                        'Se ha producido un error en el servidor, intentalo mas tarde',
                        [
                          {text: 'OK', onPress: () => {}},
                        ],
                        {cancelable: false},
                      );
                })
            }else{
                Alert.alert(
                    'Error',
                    'Se tienen que rellenar todos los datos',
                    [
                      {text: 'OK', onPress: () => {}},
                    ],
                    {cancelable: false},
                  );
            }
        }else{
            Alert.alert(
                'Error',
                'Las contraseñas no coinciden',
                [
                  {text: 'OK', onPress: () => {}},
                ],
                {cancelable: false},
              );
        }
    }

    alerta = function name(params) {
        return ''
    }

    compruebaUsuario = (callback, callbackError)=>{
        return fetch(this.state.uri + '/login',{
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json' 
            },
            body: JSON.stringify ({
                email: this.state.email,
                password: this.state.password
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

    registraUsuario = (callback, callbackError) => {
        return fetch(this.state.uri + '/registro',{
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json' 
            },
            body: JSON.stringify ({
                nombre: this.state.nombre,
                apellidos: this.state.apellidos,
                dni: this.state.dni,
                email: this.state.email,
                password: this.state.password
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