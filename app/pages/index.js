import OpenShow from './OpenShow/index'
import SectionList from './SectionList/index'

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

