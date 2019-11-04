import React from 'react';
import App from './app/index'

/*redux*/
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './app/redux/rootReducers'
const store = createStore(rootReducer)


export default class SampleNavigation extends React.Component {
    render(){
        return(
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}

