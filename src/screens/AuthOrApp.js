import React, { Component } from 'react'
import logo from '../../assets/img/distrava.png';
import loading from '../../assets/img/loading.gif'
import axios from 'axios'
import {
    View,
    ActivityIndicator,
    StyleSheet,
    AsyncStorage,
    Image
} from 'react-native'

export default class AuthOrApp extends Component {
    componentWillMount = async () => {
        const json = await AsyncStorage.getItem('userData')
        const userData = JSON.parse(json) || {}

        if (userData.token) {
            axios.defaults.headers.common['Authorization']
                = `bearer ${userData.token}`
            this.props.navigation.navigate('Home')
        } else {
            this.props.navigation.navigate('Auth')
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={logo} />
                <Image source={loading} style={styles.loading} />
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5'
    },
    loading: {
        height: 80,
        marginTop: 20,
        resizeMode: 'contain'
    }
})