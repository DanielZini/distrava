import React, { Component } from 'react';
import {
    Container,
 } from './styles';
import Tab from './Tab';

export default class Header extends React.Component {

    state = {
        currentScreen: ''
    }

    changeScreen = (screen, navigation) => {
        this.setState({currentScreen: screen});
        navigation.navigate(screen);
    }

    render(){

        const { navigation } = this.props;
        const routes = navigation.state.routes;

        return (
            <Container screen={this.state.currentScreen}>
                {routes.map((route, index) => {
                    return (
                        <Tab
                            key={route.key}
                            routeName={route.routeName}
                            onPress={() => this.changeScreen(route.routeName, navigation)}
                            focused={navigation.state.index === index}
                            index={index}
                        />
                    );
                })}
            </Container>
        )
    }
}