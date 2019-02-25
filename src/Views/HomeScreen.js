import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import{Appbar} from "react-native-paper";


export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Home Screen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});