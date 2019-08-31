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


    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.container}>
                

                </View>
            </View>
        );
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
    }

})

module.exports = MenuPrincipal;