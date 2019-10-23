import React, {Component} from 'react'
import {View, Text} from 'react-native'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Com from '../view/Component'
import Api from '../view/Api'
import Icon from 'react-native-vector-icons/CustomIcon';


// 路由对应图标
const routerMapIcon = {
    Component: 'icon-discount',
    API: 'icon-order',
}

export default createBottomTabNavigator({
    Component: {
        screen: Com,
    },
    API: {
        screen: Api,
    },
}, {
    tabBarOptions: {
        activeTintColor: '#f00',
        inactiveTintColor : '#000',
    },
    /*navigationOptions: {
        headerMode: 'none',
    },*/
    defaultNavigationOptions: ({ navigation }) => {
        return {
            tabBarIcon:  ({ focused, horizontal, tintColor }) => {
                const routeName  = navigation.state.routeName     // 获得路由名

                // focused 聚焦状态 tintColor 对应状态色值
                let iconName = routerMapIcon[routeName]

                return <Icon name={ iconName } color={ tintColor } size={ 25 }></Icon>
            },
            // headerMode: 'none',
        }
    }
})

