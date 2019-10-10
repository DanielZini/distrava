import React from 'react'
import cmStyles from './commonStyles';

import Header from './components/Header';
import AuthOrApp from './screens/AuthOrApp';

// Auth
import Login from './screens/Auth/Login';
import Signup from './screens/Auth/Signup';

// Games card
import GameDetail from './screens/Home/GameDetail';
import ListCardGames from './screens/Home/ListCardGames';

// Match
import Match from './screens/Match';

// Profile
import MenuProfile from './screens/Profile/Menu';
import GamesProfile from './screens/Profile/Games';
import NewGame from './screens/Profile/NewGame';
import EditProfile from './screens/Profile/Edit';
import ConfigProfile from './screens/Profile/Config';
import CopyrightProfile from './screens/Profile/Copyright';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator   } from 'react-navigation-tabs';

// Home Stack Navigation -----------------------------
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

// Profile Stack Navigation ---------------------------
const ProfileStack = createStackNavigator(
    {
        MenuProfile: {
            screen: MenuProfile,
            navigationOptions: {
                header: null,
            },
        },
        GamesProfile,
        GameDetail,
        NewGame,
        EditProfile,
        ConfigProfile,
        CopyrightProfile
    },
    {
        initialRouteName: 'MenuProfile',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: cmStyles.cl.second,
            },
            headerTintColor: '#FFFFFF',
            headerTitleStyle:{
                fontFamily: cmStyles.fontRegular
            }
        }
    },
);

// esconde top tab bar quando abrir o stack navigation
ProfileStack.navigationOptions = ({ navigation }) => {
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
                LoadingPage: {
                    screen: AuthOrApp
                },
                Auth: createStackNavigator(
                    {
                        Login: {
                            screen: Login,
                            navigationOptions: {
                                header: null,
                            },
                        },
                        Signup,
                    },
                    {
                        initialRouteName: 'Login',
                        defaultNavigationOptions: {
                            headerStyle: {
                                backgroundColor: cmStyles.cl.second,
                            },
                            headerTintColor: '#FFFFFF',
                            headerTitleStyle: {
                                fontFamily: cmStyles.fontRegular
                            }
                        }
                    }
                ),
                App: createMaterialTopTabNavigator(
                    {
                        Profile: ProfileStack,
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
                // initialRouteName: 'App',
                initialRouteName: 'LoadingPage',
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