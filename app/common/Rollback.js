import React from 'react'
import {View, TouchableHighlight ,StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/CustomIcon';

export default class Rollback extends React.Component{

    render() {
        return(
            <TouchableHighlight style={styles.wrap} onPress={ () => this.props.navigation.goBack() }>
                <Icon name="icrollback" size={ 30 } style={ styles.bgf }></Icon>
            </TouchableHighlight >
        );
    }
}

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        marginLeft: 15,
    },
    bgf: {
        backgroundColor: '#fff',
    }
})
