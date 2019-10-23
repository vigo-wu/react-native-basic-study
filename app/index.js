import React, {Component} from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import tabs from './router/tab'
import pageList from './pages/index'

const stackConfig = {
    initialRouteName: 'OpenShow',
}

const RouterList = createStackNavigator({
    ...pageList,
    tabs: {
        screen: tabs,
        navigationOptions: () => ({ header: null })
    }, // 选项卡
}, stackConfig)


export default createAppContainer(RouterList)
