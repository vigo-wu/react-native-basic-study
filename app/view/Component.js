import React, {Component} from 'react'
import {View, Text, Button, StyleSheet, FlatList, TouchableHighlight} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

const list = [
    {
        routerName: 'SectionList', // 跳转路由名
        title: 'SectionList',  // 列表名称
    },
]

/*列表项*/
class ListItem extends Component {

    skipToPage(e) {
        this.props.navigation.navigate(this.props.target.routerName)
    }


    render() {
        return (
            <TouchableHighlight activeOpacity={0.8} style={styles.touchable} onPress={ this.skipToPage.bind(this) } underlayColor="#409EFF">
                <View style={ styles.wrap }>
                    <Text style={ styles.textFC }>{ this.props.target.title }</Text>
                    <Icon name="angle-right" size={ 30 }></Icon>
                </View>
            </TouchableHighlight>
        )
    }
}

export default class root extends Component{


    render() {
        return(
            <View>
                <FlatList
                    data={ list }
                    renderItem={ ({ item }) => <ListItem navigation={ this.props.navigation } target={ item } /> }
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        borderStyle: 'solid',
        backgroundColor: '#fff'
    },
    textFC: {
        color: '#333',
        fontSize: 18
    },
    touchable: {
        // backgroundColor: '#409EFF',
    }
})
