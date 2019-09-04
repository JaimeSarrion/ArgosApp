import React from 'react';

import {
    StyleSheet,
    Text,
    View
} from 'react-native';


class DetallePaciente extends React.Component {
    constructor(props) {
        super(props)

    }
    static navigationOptions = {
        title: 'Detalles del paciente',
        headerTitleStyle: {
            fontWeight: 'bold',
            color: 'black',
        },
    };
    componentWillMount(){
        this.setState({paciente: this.props.navigation.state.params.paciente})
    }
    render(){
                return(
            <View>
            <Text>
             {this.state.paciente.nombre}
            </Text>
            </View >
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})
module.exports = DetallePaciente