import React from 'react'
import {View, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/CustomIcon';

export default class Rollback extends React.Component{

    enterBack() {
        this.props.navigation.goBack()
    }


    render() {
        return(
            <View style={styles.wrap}>
                <Icon onPress={ this.enterBack.bind(this) } name="icrollback" size={ 30 }></Icon>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrap: {
        paddingLeft: 15
    }
})
