import React, { Component } from 'react';
import {
    Text,
    FlatList,
    Linking,
    View
} from 'react-native';
import { Header, List, ListItem } from "react-native-elements";

export default class NewsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }

    componentDidMount() {
        this._executeQuery()
    }

    _executeQuery = () => {
        fetch('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=7d7ad360b38e443eb491f7b08d6668dc')
            .then(response => response.json())
            .then(json => this.setState({ data: json.articles }))
            .catch(error => console.log(error));
    };

    _onPressItem = (url) => {
        Linking.openURL(url).catch(err => console.error('An error occurred', err));
    };

    _keyExtractor = (item, index) => index;

    render() {
        return (
            <View>
                <Header
                    statusBarProps={{ barStyle: 'light-content' }}
                    centerComponent={{ text: 'Top BBC news', style: { color: '#fff'} }}
                    outerContainerStyles={{ backgroundColor: '#3D6DCC' }}
                    innerContainerStyles={{ justifyContent: 'space-around',}}
                />
            <List >
                <FlatList
                keyExtractor={this._keyExtractor}
                    data={this.state.data}
                    renderItem={({ item }) => (
                        <ListItem
                            roundAvatar
                            title={item.title}
                            subtitle={item.description}
                            titleNumberOfLines={0}
                            subtitleNumberOfLines={0}
                            avatar={{ uri: item.urlToImage }}
                            onPress={() => this._onPressItem(item.url)}
                        />
                    )}
                />
            </List>
            </View>
        );
    }
}
