import Login from './screens/Login';
import Main from './screens/Main';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const Routes = createAppContainer(
    createSwitchNavigator({
        Login,
        Main,
    })
);

export default Routes;