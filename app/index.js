import React, {Component} from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Icon from 'react-native-vector-icons/AntDesign';



import tabs from './router/tab'
import pageList from './pages/index'

const stackConfig = {
    initialRouteName: 'tabs', // OpenShow
    navigationOptions: {
        headerLeft: () => <Icon name="rollback"></Icon>,
    }
}

const RouterList = createStackNavigator({
    ...pageList,
    tabs: {
        screen: tabs,
        navigationOptions: () => ({ header: null })
    }, // 选项卡
}, stackConfig)


export default createAppContainer(RouterList);







