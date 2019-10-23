import React, {Component} from 'react'
import {View, Text} from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
// import stackRouter from './router/list'
import tabs from './router/tab'
// import pageList from './pages/index'
import Home from './pages/Home'
import Detail from './pages//Detail'

const stackConfig = {
    initialRouteName: 'tabs',
}

const RouterList = createStackNavigator({
    tabs: {
        screen: tabs,
        navigationOptions: () => ({ header: null })
    }, // 选项卡
    Home: Home,
    Detail: Detail
    // views: stackRouter,
}, stackConfig)


export default createAppContainer(RouterList)
