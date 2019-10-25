/*
* Des: 开场界面
* */
import React, {Component} from 'react'
import {View, Text, Button, StyleSheet} from 'react-native'

export default class Index extends Component {
    static = {}

    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.push('tabs')
        }, 2000)
    }

    render() {
        return (
            <View style={styles.wrap}>
                <Text style={styles.welcome}>RNDemo</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        backgroundColor: '#3B2667',
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcome: {
        fontSize: 18,
        color: '#fff'
    },
})
