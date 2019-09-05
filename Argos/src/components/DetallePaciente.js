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
    componentDidMount(){
        console.log(this.state.paciente)
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
                    <View style={styles.combo}>
                        <TouchableHighlight style={styles.boton}>
                            <Text>BPM:135</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.boton}>
                            <Text>Pasos:7892</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.combo}>
                        <TouchableHighlight style={styles.boton}>
                            <Text>Temp:34ºC</Text>
                        </TouchableHighlight >
                        <TouchableHighlight style={styles.boton}>
                            <Text>O2: 95 SpO2</Text>
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
        
    },
    boton: {
        padding: 10,
        margin: 5,
        width: 135,
        height: 60,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: '#3ED07B',
    },
    combo: {
        flexDirection: "row",
        flexWrap:"wrap"
    },
    footer: {
        flex: 1,
        backgroundColor: "whitesmoke",
        borderRadius: 10,
        borderWidth: 1,
        marginBottom: 5,
    }
})
module.exports = DetallePaciente