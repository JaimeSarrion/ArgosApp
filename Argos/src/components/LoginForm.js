
import React from 'react';
import { fetch } from 'fetch-awesome';

import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    TextInput,
    Alert,
} from 'react-native';

class LoginForm extends React.Component {
    static navigationOptions = {
        title: 'Login'
    }

    constructor(props) {
        super(props);
        this.state = {
            User: '',
            Pass: '',
            uri: "https://hidden-crag-54463.herokuapp.com"
        };
    }
    
    render() {
        return (
            <View>
                <Text>Hola que tal esto es el login form</Text>
            </View>
        );
    }
}

module.exports = LoginForm;