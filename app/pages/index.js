import React, {Component} from 'react'
import Icon from 'react-native-vector-icons/CustomIcon';
import Rollback from '../common/Rollback'


import OpenShow from './OpenShow/index'
import SectionList from './SectionList/index'


// 匹配
const navaigationOptions = (name, options = {}) => {
    return {
        screen: screenMap[name].component,
        navigationOptions: {
            title: screenMap[name].title,
            headerLeft: ({scene: { descriptor: { navigation: navigation } }}) => <Rollback navigation={ navigation } />,
            ...options
        }
    }
}

// 映射表
const screenMap = {
    OpenShow: {
        component: OpenShow,
        title: 'OpenShow'
    },
    SectionList: {
        component: SectionList,
        title: 'SectionList组件'
    },
}


export default {
    OpenShow: navaigationOptions('OpenShow', {header: null}),
    SectionList: navaigationOptions('SectionList'),
}

