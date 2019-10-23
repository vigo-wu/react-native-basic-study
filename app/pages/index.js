import Home from './Home'
import OpenShow from './OpenShow'

// 映射表
const screenMap = {
    OpenShow: {
        component: OpenShow,
        title: 'OpenShow'
    },
    Home: {
        component: Home,
        title: '首页'
    },
}

// 匹配
const navaigationOptions = (name, options = {}) => {
    return {
        screen: screenMap[name].component,
        navigationOptions: {
            title: screenMap[name].title,
            ...options
        }
    }
}

export default {
    OpenShow: navaigationOptions('OpenShow', {header: null}),
    Home: navaigationOptions('Home'),
}

