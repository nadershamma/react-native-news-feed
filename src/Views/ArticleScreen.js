import React from 'react';
import {View, WebView} from "react-native";

export default class ArticleScreen extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const url = this.props.navigation.getParam('article', 'No link');
        return (
            <View style={{flex:1}}>
                <WebView style={{flex:1}} source={{uri: url}}/>
            </View>
        );
    }
}
