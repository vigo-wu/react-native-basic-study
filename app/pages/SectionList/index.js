import React, { Component } from 'react'
import { View, Text, SectionList, ScrollView } from 'react-native'
import { connect } from 'react-redux';

import store from '../../redux/store/index'


class Root extends Component {

    constructor(props) {
        super(props)

        this.state = {
            loading: false
        }
    }

    /**
     * 下拉刷新
     */
    _onRefresh = () => {
        // this.setState({ data: [], total: 0, page: 1 });
        console.log('下拉刷新');
    };

    render() {
        return (
            <View style={{height: 300 }}>
                <SectionList
                    renderItem={({ item, index, section }) => <Text key={index}>{item}</Text>}
                    renderSectionHeader={({ section: { title } }) => (
                        <Text style={{ fontWeight: "bold" }}>{title}</Text>
                    )}
                    sections={[
                        { title: "Title1", data: ["item1", "item2"] },
                        { title: "Title2", data: ["item3", "item4"] },
                        { title: "Title3", data: ["item5", "item6"] },
                        { title: "Title3", data: ["item5", "item6"] },
                        { title: "Title3", data: ["item5", "item6"] },
                        { title: "Title3", data: ["item5", "item6"] },
                        { title: "Title3", data: ["item5", "item6"] },
                        { title: "Title3", data: ["item5", "item6"] },
                        { title: "Title3", data: ["item5", "item6"] },
                        { title: "Title3", data: ["item5", "item6"] },
                        { title: "Title3", data: ["item5", "item6"] },
                        { title: "Title3", data: ["item5", "item6"] },
                        { title: "Title3", data: ["item5", "item6"] },
                        { title: "Title3", data: ["item5", "item6"] },
                        { title: "Title3", data: ["item5", "item6"] },
                        { title: "Title3", data: ["item5", "item6"] },
                        { title: "Title3", data: ["item5", "item6"] },
                    ]}
                    keyExtractor={(item, index) => item + index}
                    onEndReached={() => {
                        console.log('121');
                    }}
                    onRefresh={this._onRefresh}
                    refreshing={this.state.loading}

                />
            </View>
        );
    }
}




export default connect(state => ({ value: state }))(Root);
