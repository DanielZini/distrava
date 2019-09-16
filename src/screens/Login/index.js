import React from 'react';
import logo from '../../../assets/img/distrava.png';
import bg from '../../../assets/img/bg.png';
import Input from '../../components/Input';
import Button from '../../components/Button';
import ButtonLink from '../../components/ButtonLink';
import { 
    Container,
    BackgroundPattern,
    Logo,
    WrapForm,
} from './styles';



const Login = ({ navigation }) => {

    doLogin = () => {
        navigation.navigate('Main');
    }

    return (
        <Container>
            <BackgroundPattern source={bg} />
            <Logo source={logo} />
            <WrapForm>
                <Input icon='person'
                    autoCapitalize='none'
                    placeholder='E-mail'
                    keyboardType="email-address" />
                <Input icon='lock'
                    secureTextEntry={true}
                    placeholder='Senha' />

                <Button onPress={() => doLogin()}>Entrar</Button>

            </WrapForm>

            <ButtonLink>Ainda não possui conta?</ButtonLink>
        </Container>
    )
}

Login.navigationOptions = {
    title: 'Login',
}

export default Login