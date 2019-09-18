import React from 'react';
import { 
    Container,
 } from './styles';
import Tab from './Tab';

export default props => {

    const { navigation } = props;
    const routes = navigation.state.routes;

    return (
        <Container>
            {routes.map((route, index) => {
                return (
                    <Tab
                        key={route.key}
                        routeName={route.routeName}
                        onPress={() => navigation.navigate(route.routeName)}
                        focused={navigation.state.index === index}
                        index={index}
                    />
                );
            })}
        </Container>
    )
}