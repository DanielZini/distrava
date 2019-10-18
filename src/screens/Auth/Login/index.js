import React from 'react';
import { Keyboard, AsyncStorage } from 'react-native';
import loadingGif from '../../../../assets/img/loading.gif';
import CustomModal from '../../../components/CustomModal';
import Icon from 'react-native-vector-icons/MaterialIcons';
import logo from '../../../../assets/img/distrava.png';
import bg from '../../../../assets/img/bg.png';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import ButtonLink from '../../../components/ButtonLink';
import axios from 'axios';
import cmStyles from '../../../commonStyles';
import { server, showError } from '../../../common';
import {
    Container,
    BackgroundPattern,
    Logo,
    WrapForm,
    LoadingGif,
    TextModal
} from './styles';

class Login extends React.Component {

    state = {
        email: '',
        password: '',
        modalLoadingVisible: false,
        modalResponseMsgVisible: false
    }

    doLogin = async () => {

        this.setState({ modalLoadingVisible: true });
        
        try {
            Keyboard.dismiss();
            
            const res = await axios.post(`${server}/signin`, {
                email: this.state.email,
                password: this.state.password
            });

            axios.defaults.headers.common['Authorization'] = `bearer ${res.data.token}`
            AsyncStorage.setItem('userData', JSON.stringify(res.data))

            this.setState({ modalLoadingVisible: false });

            this.props.navigation.navigate('App');

        } catch (err) {

            this.setState({ modalLoadingVisible: false });
            this.setState({ modalResponseMsgVisible: true });

            setTimeout(() => {
                this.setState({ modalResponseMsgVisible: false });
            }, 2000);
        }
    }

    render(){

        const validations = []

        validations.push(this.state.email);
        validations.push(this.state.password);
        
        const validForm = validations.reduce((all, v) => all && v);

        return (
            <Container>

                <CustomModal
                    modalVisible={this.state.modalLoadingVisible}
                    disabledClose={true}>
                    <LoadingGif source={loadingGif} />
                    <TextModal>Verificando conta...</TextModal>
                </CustomModal>
                <CustomModal
                    modalVisible={this.state.modalResponseMsgVisible}
                    disabledClose={true}>
                    <Icon name='error-outline' size={50} color={cmStyles.cl.primary} />
                    <TextModal>Ops. Usuário ou senha inválidos!</TextModal>
                </CustomModal>

                <BackgroundPattern source={bg} />

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