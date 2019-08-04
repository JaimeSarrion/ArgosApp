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
            color: 'black'
        }
    };


    render() {
        return (
            <View>
                <Text>Menu principal</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({})

module.exports = MenuPrincipal;