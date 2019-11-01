import React, {Component} from 'react'
import {View, Text, Button, StyleSheet, FlatList, TouchableHighlight} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

/*
    数据结构：
        [
            {
                title: '分组1',
                iconName: '',
                data: [
                    {
                        name: '',
                        routerName: ''
                    }
                ],   // 分组列表
            }
        ]
* */


/*列表项*/
/*class ListItem extends Component {
    render() {
        return (
            <TouchableHighlight activeOpacity={ 0.1 } underlayColor="white" style={{backgroundColor: '#f00'}}>
                <View style={ styles.wrap }>
                    <Text style={ styles.textFC }>{ this.props.target.name }</Text>
                    <Icon name="angle-right" size={ 30 }></Icon>
                </View>
            </TouchableHighlight>
        )
    }
}

export class RootList extends Component {
    render() {
        return (
            <FlatList
                data={ this.props.target }
                renderItem={ ({ item }) => {
                    console.log('test');
                    console.log(item);
                } }
            />
        )
    }
}



/!*头部组件*!/
export class HeaderItem extends Component {
    render() {
        return (
            <View style={ styles.wrap }>
                <Text style={ styles.textFC }>{ this.props.target.title }</Text>
                <Icon name={ this.props.target.iconName } size={ 30 }></Icon>
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
    },
    textFC: {
        color: '#333',
        fontSize: 18
    }
})*/






