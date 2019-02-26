import React from 'react';
import {Text} from 'react-native'
import {Card, Title, Paragraph} from 'react-native-paper';

export default class NewsCard extends React.Component{
    constructor(props) {
        super(props)
    }

    render(){
        return (
            <Card>
                <Card.Cover source={{uri: this.props.articleImage}}/>
                <Card.Title/>
                <Card.Content>
                    <Title>{this.props.articleTitle}</Title>
                    <Paragraph>{this.props.articleSummary}</Paragraph>
                </Card.Content>
            </Card>
        );
    }
}
