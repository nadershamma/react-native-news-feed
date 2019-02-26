import React from 'react';
import {FlatList, Text, View} from 'react-native';
import NewsCard from "./NewsCard";


export default class Headlines extends React.Component {
    constructor(props) {
        super(props);
    }

    renderItemFromList(article){
        console.log(12, article);
        return (
            <NewsCard
                articleImage={article.key.urlToImage}
                articleTitle={article.key.title}
            />
        )
    }

    render() {
        let content = null;
        if (this.props.articles !== null) {
            console.log(25, this.props.articles);
            content = <FlatList
                data={this.props.articles}
                renderItem={({item})=>this.renderItemFromList(item)}
                keyExtractor={item => item.key.toString()}
            />
        }
        return (
            <View>
                {content}
            </View>
        );
    }
}
