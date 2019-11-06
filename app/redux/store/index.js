//引入createStore 模块
import {createStore} from 'redux'

import rootReducer from '../rootReducers'

const store = createStore(rootReducer)
//导出store
export default store;
