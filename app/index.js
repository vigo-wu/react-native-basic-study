import React, {Component} from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Icon from 'react-native-vector-icons/AntDesign';

import store from './redux/store/index'
import {saveNavigation} from './redux/actions/globalAction'

import tabs from './router/tab'
import pageList from './pages/index'

const stackConfig = {
    initialRouteName: 'tabs', // OpenShow
    navigationOptions: {
        headerLeft: () => <Icon name="rollback"></Icon>,
    },
    defaultNavigationOptions: ({navigation}) => {
        // 保存navigation到store中
        store.dispatch(saveNavigation(navigation))
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







