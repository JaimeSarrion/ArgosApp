import React from 'react';


import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    TextInput,
} from 'react-native';

class MenuPrincipal extends React.Component {
    static navigationOptions = {
        title: 'Bienvenido a Argos',
        headerTitleStyle:{
            fontWeight: 'bold',
            color: 'black',
        },
        headerLeft: null
    };

    constructor(props){
        super(props)
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.container}>
                    <TouchableHighlight
                        
                        onPress={this.btnPacientes}
                        style={styles.boton}>
                        <Text style={styles.textoBoton}>Ver pacientes</Text>
                    </TouchableHighlight>

                </View>
            </View>
        );
    }
    btnPacientes = () =>{
        this.props.navigation.navigate('ListadoPacientesScreen')
    }
}


const styles = StyleSheet.create({
    wrapper:{
        flex: 1
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2893d3',
        paddingLeft: 40,
        paddingRight: 40,
    },
    boton: {
        alignSelf: 'stretch',
        padding: 20,
        alignItems:'center',
        backgroundColor: '#3ED07B',
    }

})

module.exports = MenuPrincipal;