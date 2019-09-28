/**
 * @format
 */
console.disableYellowBox = true;

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

import createRoutes from './src/routes';

AppRegistry.registerComponent(appName, () => createRoutes);