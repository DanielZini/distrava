import React from 'react'
import Login from './screens/Login';
import ListCardGames from './screens/Home/ListCardGames';
import GameDetail from './screens/Home/GameDetail';
import Match from './screens/Match';
import Profile from './screens/Profile';
import Header from './components/Header';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator   } from 'react-navigation-tabs';
import { GameImage } from './components/Card/styles';

const HomeStack = createStackNavigator(
    {
        ListCardGames: {
            screen: ListCardGames,
            navigationOptions: {
                header: null,
            },
        },
        GameDetail: {
            screen: GameDetail,
        },
    },
    {
        initialRouteName: 'ListCardGames',
        mode: 'modal',
    },
);

// esconde top tab bar quando abrir o stack navigation
HomeStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }

    return {
        tabBarVisible,
    };
};

export default createRoutes = createAppContainer(
        createSwitchNavigator(
            {
                Auth: createSwitchNavigator(
                    {
                        Login,
                    }
                ),
                App: createMaterialTopTabNavigator(
                    {
                        Profile,
                        Home: HomeStack,
                        Match,
                    },
                    {
                        tabBarComponent: Header,
                        initialRouteName: 'Home',
                    }
                ),
            },
            {
                initialRouteName: 'App',
            }
        )
    );
// export const GameRoutes = createStackNavigator (
//     {
//         GameDetail
//     },
//     {
//         initialRouteName: 'GameDetail',
//     },
// )

// const HeaderRoutes = createMaterialTopTabNavigator (
//     {
//         Profile: {
//             name: 'Perfil',
//             screen: Profile,
//         },
//         Main: {
//             title: 'Home',
//             screen: Main,
            
//         },
//         Match: {
//             name: 'Troca',
//             screen: Match,
//         },
//     },
//     {
//         tabBarComponent: Header,
//         initialRouteName: 'Main',
//     },
// )
// const HeaderNavigator = createAppContainer(HeaderRoutes);

// const MainRoutes = createSwitchNavigator (
//     {
//         Login: {
//             name: 'Login',
//             screen: Login,
//         },
//         Main: {
//             name: 'Home',
//             screen: HeaderRoutes,
//         },
//     },
//     {
//         initialRouteName: 'Login',
//     },
// )
// const MainNavigator = createAppContainer(MainRoutes);

// export { HeaderNavigator, MainNavigator };