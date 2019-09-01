import React from 'react';
import Paciente from './Paciente'

import {
    StyleSheet,
    AsyncStorage,
    View,
    FlatList,
} from 'react-native';

const lista=[];

class ListadoPacientes extends React.Component {

    static navigationOptions = {
        title: 'Listado de pacientes',
        headerTitleStyle:{
            fontWeight: 'bold',
            color: 'black',
        }
    };

    constructor(props){
        super(props)
    }

    componentDidMount(){
        AsyncStorage.getItem('user').then((data)=>{
            let user = JSON.parse(data)
            fetch(this.state.uri + '/pacientes',{
                method: 'GET',
                headers: {
                    'authorization' : user.token 
                },
                timeout: 5000,
                retries: 0
            }).then((data)=> {
                return data.json()
            }).then((response)=>{
                console.log(response)
                lista = response
            }).catch(function(error){
                callbackError(error)
            })
        })
    }

    _keyExtractor = (item, index) => item.CodPaciente.toString();
    render(){
        return (
            <View style={styles.container}>
                <FlatList
                     data={lista}
                     keyExtractor={this._keyExtractor}
                     renderItem={({item}) => <Paciente nombre={item.Nombre} apellidos ={item.Apellidos}></Paciente>}
                >

                </FlatList>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2893d3',
        paddingLeft: 40,
        paddingRight: 40,
    },
})

module.exports = ListadoPacientes   