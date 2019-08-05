import React from 'react';

import {
    Text,
    View,
} from 'react-native';


class RegistroForm extends React.Component {
    constructor(props){
        super(props)
    }
    static navigationOptions = {
        title: 'Registro de nuevos usuarios',
        headerTitleStyle:{
            fontWeight: 'bold',
            color: 'black'
        }
    };
    render(){
        return(
            <View>
                <Text>Esto es el form del registro</Text>
            </View>
        );
    }

}

module.exports = RegistroForm