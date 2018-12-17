import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Main extends Component {
    static navigationOptions = {
        header: null,
    }
    render() {
        return (
            <View>
                <Text>main</Text>
            </View>
        );
    }
}

export default Main;
