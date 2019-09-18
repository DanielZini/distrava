import Login from './screens/Login';
import Main from './screens/Main';
import Match from './screens/Match';
import Profile from './screens/Profile';
import Header from './components/Header';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createMaterialTopTabNavigator   } from 'react-navigation-tabs';

const HeaderScreens = createMaterialTopTabNavigator (
    {
        Profile: {
            name: 'Perfil',
            screen: Profile,
        },
        Main: {
            name: 'Home',
            screen: Main,
        },
        Match: {
            name: 'Troca',
            screen: Match,
        },
    },
    {
        tabBarComponent: Header,
        initialRouteName: 'Match',
    },
)

const HeaderRouts = createAppContainer(HeaderScreens);

const LoginScreen = createSwitchNavigator (
    {
        Login: {
            name: 'Login',
            screen: Login,
        },
        Main: {
            name: 'Home',
            screen: HeaderRouts,
        },
    },
    {
        initialRouteName: 'Login',
    },
)

const LoginRouts = createAppContainer(LoginScreen);

export { HeaderRouts, LoginRouts };