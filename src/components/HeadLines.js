import React from 'react';
import {FlatList, Text, TouchableHighlight, View} from 'react-native';
import NewsCard from "./NewsCard";


export default class Headlines extends React.Component {
    constructor(props) {
        super(props);
        this.viewArticle = this.viewArticle.bind(this);
    }

    viewArticle(url) {
        this.props.navigate(url);
    }

    renderItemFromList(article) {
        //console.log(12, article);
        return (
            <TouchableHighlight onPress={()=> {this.viewArticle(article.key.url)}}>
                <NewsCard
                    articleImage={article.key.urlToImage}
                    articleTitle={article.key.title}
                />
            </TouchableHighlight>
        )
    }

    render() {
        let content = null;
        if (this.props.articles !== null) {
            // console.log(25, this.props.articles);
            content = <FlatList
                data={this.props.articles}
                renderItem={({item}) => this.renderItemFromList(item)}
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
