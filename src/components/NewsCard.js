import React from 'react';
import {Text} from 'react-native'
import {Card, Title, Paragraph} from 'react-native-paper';

export default class NewsCard extends React.Component{
    constructor(props) {
        super(props)
    }

    render(){
        return (
            <Card style={{padding:10}}>
                <Card.Cover source={{uri: this.props.articleImage}}/>
                <Card.Content>
                    <Title>{this.props.articleTitle}</Title>
                </Card.Content>
            </Card>
        );
    }
}
