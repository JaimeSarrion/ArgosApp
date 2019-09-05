import React from 'react';

import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
} from 'react-native';
import { NativeModulesProxy } from '@unimodules/core';


class Dia extends React.Component {
    constructor(props){
        super(props)

    }
    render(){
        return(
            <View style={styles.container}>
                <Text>
                    {this.props.Text}
                </Text>
            </View>
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
module.exports = Dia