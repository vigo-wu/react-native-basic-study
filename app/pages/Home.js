import React, {Component} from 'react'
import {View, Text, Button} from 'react-native'

export default class Home extends Component{
    render() {
        return(
            <View>
                <Text>Home</Text>
                <Button title="go to detail"
                        onPress={() => this.props.navigation.push('Detail')}/>
            </View>
        )
    }
}
