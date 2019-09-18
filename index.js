/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

import { HeaderRouts, LoginRouts } from './src/routes';

AppRegistry.registerComponent(appName, () => HeaderRouts);
