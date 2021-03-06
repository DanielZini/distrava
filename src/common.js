import { Alert, Platform } from 'react-native';

// Device
// const server = 'http://192.168.0.107:3000';

// Online
const server = 'https://distrava.herokuapp.com';

// Emulator
// const server = Platform.OS === 'ios' ? 'http://localhost:3000' : 'http://10.0.2.2:3000'

function showError(err){
    Alert.alert('Ops! Ocorreu um problema!', `Mensagem: ${err}`);
}

export { server, showError }