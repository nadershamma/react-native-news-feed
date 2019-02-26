import React from 'react';
import {FlatList, Text, View} from 'react-native';
import NewsCard from "./NewsCard";


export default class Headlines extends React.Component {
    constructor(props) {
        super(props);
    }

    articleList(objects) {
        let articles = [];
        objects.forEach((item, index, array) => {
            let key = `content-${index}`;
            articles.push({key: item});
        });
        return articles;
    }

    render() {
        let content = null;
        if (this.props.articles !== null) {
            let items = this.articleList(this.props.articles);
            content = <FlatList
                data={items}
                renderItem={
                    ({item}) => <NewsCard
                                articleImage={item.key.urlToImage}
                                articleTitle={item.key.title}
                                articleSummary={item.key.content}
                            />
                }
                keyExtractor={item => item.key.toString()}
            />
        }
        return (
            <View>
                <Text>Headlines</Text>
                {content}
            </View>
        );
    }
}
