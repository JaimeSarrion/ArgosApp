import React from 'react';
import Dia from './Dia';

import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
} from 'react-native';

import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

class MenuPrincipal extends React.Component {
    static navigationOptions = {
        title: 'Bienvenido a Argos',
        headerTitleStyle: {
            fontWeight: 'bold',
            color: 'black',
        },
        headerLeft: null
    };

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.container}>
                    <Agenda
                        // the list of items that have to be displayed in agenda. If you want to render item as empty date
                        // the value of date key kas to be an empty array []. If there exists no value for date key it is
                        // considered that the date in question is not yet loaded
                        items={{
                            '2019-09-22': [{ text: 'Revisar analisis del paciente Kidd' }],
                            '2019-09-23': [{ text: 'Cita con el odontologo' }],
                            '2019-09-24': [],
                            '2019-09-25': [{ text: 'Comprar medicamentos' }]
                        }}
                        // initially selected day
                        selected={Date.now()}
                        // Max amount of months allowed to scroll to the past. Default = 50
                        pastScrollRange={30}
                        // Handler which gets executed on day press. Default = undefined
                        onDayPress={(day) => { console.log('selected day', day) }}
                        // Handler which gets executed on day long press. Default = undefined
                        onDayLongPress={(day) => { console.log('selected day', day) }}
                        // specify how each item should be rendered in agenda
                        renderItem={(item, firstItemInDay) => {
                            return (
                                <Dia
                                Text={item.text}></Dia>
                            );
                        }}
                        // specify your item comparison function for increased performance
                        rowHasChanged={(r1, r2) => { return r1.text !== r2.text }}
                        // specify what should be rendered instead of ActivityIndicator
                        renderEmptyData={() => { return (<View />); }}
                        // specify how empty date content with no items should be rendered
                        renderEmptyDate={() => { return (<View />); }}
                        // Set this true while waiting for new data from a refresh
                        refreshing={false}
                        style={styles.agenda}
                    />
                    <TouchableHighlight
                        onPress={this.btnPacientes}
                        style={styles.boton}>
                        <Text style={styles.textoBoton}>Ver pacientes</Text>
                    </TouchableHighlight>

                </View>
            </View>
        );
    }
    btnPacientes = () => {
        this.props.navigation.navigate('ListadoPacientesScreen')
    }
}


const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2893d3',
        paddingLeft: 35,
        paddingRight: 35,
    },
    boton: {
        alignSelf: 'stretch',
        padding: 20,
        alignItems: 'center',
        backgroundColor: '#3ED07B',
    },
    agenda: {
        alignSelf: 'stretch',
    }


})

module.exports = MenuPrincipal;