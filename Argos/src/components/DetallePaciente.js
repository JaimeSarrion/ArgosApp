import React from 'react';

import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
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
    componentWillMount() {
        this.setState({ paciente: this.props.navigation.state.params.paciente })
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image
                        source={require('../images/user.png')}
                        style={styles.imagen}
                    ></Image>
                    <View >
                        <Text style={styles.nombre}>
                            {this.state.paciente.nombre}
                        </Text>
                        <Text>
                            {this.state.paciente.apellidos}
                        </Text>
                    </View>
                </View>
                <View style={styles.body}>
                    <View style={flexDirection = "row"}>
                        <TouchableHighlight>
                            <Text>BPM</Text>
                        </TouchableHighlight>
                        <TouchableHighlight>
                            <Text>Pasos</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={flexDirection = "row"}>
                        <TouchableHighlight>
                            <Text>Temperatura</Text>
                        </TouchableHighlight>
                        <TouchableHighlight>
                            <Text>Oxigeno</Text>
                        </TouchableHighlight>
                    </View>
                </View>
                <View style={styles.footer}>
                    <Text style={styles.nombre}>
                        Observaciones:
                    </Text>
                    <Text>
                        {this.state.paciente.observaciones}
                    </Text>
                </View>
            </View>


        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2893d3',
        paddingLeft: 35,
        paddingRight: 35,
    },
    nombre: {
        fontWeight: 'bold',
        fontSize: 30
    },
    imagen: {
        width: 100,
        height: 100
    },
    header: {
        flexDirection: "row"
    },
    body: {
        backgroundColor: 'white'
    },
    boton: {

    },
    footer: {
        backgroundColor: "grey"
    }
})
module.exports = DetallePaciente