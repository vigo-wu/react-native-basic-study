import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux';

class Root extends Component {

    render() {
        return (
            <View>
                <Text>test</Text>
            </View>
        );
    }
}




export default connect(state => ({ value: state }))(Root);
