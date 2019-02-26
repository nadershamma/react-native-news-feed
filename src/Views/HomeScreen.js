import React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import NewsAPI from "../lib/NewsAPI";
import Headlines from "../components/HeadLines";


export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {articles: null}
        this.aggregate = new NewsAPI();
    }

    componentDidMount() {
        this.aggregate.fetchHeadlines()
            .then(objects => {
                this.setState({articles: objects})
            });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Home Screen</Text>
                <Headlines articles={this.state.articles}/>
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
