import React from 'react';
import { Alert, Keyboard, AsyncStorage } from 'react-native';
import FlashMessage, { showMessage, hideMessage } from 'react-native-flash-message';
import logo from '../../../../assets/img/distrava.png';
import bg from '../../../../assets/img/bg.png';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import ButtonLink from '../../../components/ButtonLink';
import axios from 'axios';
import { server, showError } from '../../../common';
import { 
    Container,
    BackgroundPattern,
    Logo,
    WrapForm,
} from './styles';

class Login extends React.Component {

    state = {
        email: '',
        password: '',
    }

    doLogin = async () => {
        
        try {
            Keyboard.dismiss();
            
            const res = await axios.post(`${server}/signin`, {
                email: this.state.email,
                password: this.state.password
            });

            axios.defaults.headers.common['Authorization'] = `bearer ${res.data.token}`
            AsyncStorage.setItem('userData', JSON.stringify(res.data))

            this.props.navigation.navigate('App');

        } catch (err) {

            console.log(err);
            
            showMessage({
                message: "Ops. Usuário ou senha inválidos!",
                type: "warning",
                duration: 2500
            });
        }
    }

    render(){

        const validations = []

        validations.push(this.state.email);
        validations.push(this.state.password);
        
        const validForm = validations.reduce((all, v) => all && v);

        return (
            <Container>
                <BackgroundPattern source={bg} />

                <FlashMessage position="top" />

                <Logo source={logo} />
                <WrapForm>
                    <Input icon='person'
                        autoCapitalize='none'
                        placeholder='E-mail'
                        keyboardType="email-address"
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })} />
                    <Input icon='lock'
                        secureTextEntry={true}
                        placeholder='Senha'
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}  />
    
                    <Button 
                        disabled={ !validForm }
                        onPress={() => this.doLogin()}>Entrar</Button>
    
                </WrapForm>
    
                <ButtonLink
                    onPress={() => this.props.navigation.navigate('Signup')}>Ainda não possui conta?</ButtonLink>
            </Container>
        )
    }
}

export default Login