import React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import NewsAPI from "../lib/NewsAPI";
import Headlines from "../components/HeadLines";


export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Headlines',
    };


    constructor(props) {
        super(props);
        this.state = {articles: null};
        this.aggregate = new NewsAPI();
        this.navigate = this.navigate.bind(this);
    }

    componentDidMount() {
        this.aggregate.fetchHeadlines()
            .then(articles => {
                this.setState({articles: articles})
            });
    }

    navigate(url=null){
        this.props.navigation.navigate('Article', {article:url});
    }

    render() {
        let content = null;
        if (this.state.articles !== null){
            content = <Headlines articles={this.state.articles} navigate={this.navigate}/>;
        }
        return (
            <View style={styles.container}>
                {content}
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
