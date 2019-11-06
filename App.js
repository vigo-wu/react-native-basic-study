import React from 'react';
import App from './app/index'

/*redux*/
import { Provider } from 'react-redux'
import store from './app/redux/store/index'


export default class SampleNavigation extends React.Component {
    render(){
        return(
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}

