import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {  faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import {
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    Icon,
    TouchableHighlight,
    TextInput,
} from 'react-native';

class ListadoPacientes extends React.Component {
    constructor(props){
        super(props)
    }


    render(){
        return(
            <View style = {styles.container}>
                <Image style={styles.imagen} source={require('../images/user.png')} />
                <Text style={styles.text}>{this.props.nombre} {this.props.apellidos} </Text>
                <FontAwesomeIcon style={styles.icono} icon={faInfoCircle} />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection:'row',
        alignItems: 'stretch',
        //justifyContent: 'center',
        backgroundColor: '#f5f2f3',
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 8,
        borderWidth: 1,
    },
    text: {
        padding: 10,

    },
    imagen:{
        width: 40,
        height: 40
    },
    icono:{
        marginTop:10,
        marginBottom:10
    }
})

module.exports = ListadoPacientes