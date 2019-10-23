import React, {Component} from 'react'
import {View, Text, Button} from 'react-native'

export default class Com extends Component{
    render() {
        return(
            <View>
                <Text>Component</Text>
                <Button title="go to home"
                        onPress={() => this.props.navigation.push('Home')}/>
            </View>
        )
    }
}
