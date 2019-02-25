import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {Appbar} from "react-native-paper";
import Main from "./src/Main";

export default class App extends React.Component {
    render() {
        return (
            <PaperProvider>
                <Main/>
            </PaperProvider>
        );
    }
}


