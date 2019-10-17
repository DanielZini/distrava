import React from 'react';
import { View, Keyboard } from 'react-native';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import { ScrollView } from 'react-native-gesture-handler';
import cmStyles from '../../../commonStyles';
import CustomModal from '../../../components/CustomModal';
import loadingGif from '../../../../assets/img/loading.gif';
import IconAwesome from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import { server, showError } from '../../../common';
import {
    Container,
    WrapForm,
    TextInfo,
    Content,
    LoadingGif,
    TextModal,
} from './styles';

class Signup extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Criar conta',
        };
    };

    state = {
        modalLoadingVisible: false,
        modalSuccessRegisterVisible: false,
        name: '',
        city: '',
        state: '',
        email: '',
        whatsapp: '',
        password: '',
    }

    createAccount = async () => {
        Keyboard.dismiss();

        try {

            this.setState({ modalLoadingVisible: true });
            
            await axios.post(`${server}/signup`, {
                name: this.state.name,
                city: this.state.city,
                state: this.state.state,
                whatsapp: this.state.whatsapp,
                email: this.state.email,
                password: this.state.password
            });

            this.setState({ modalLoadingVisible: false });
            this.setState({ modalSuccessRegisterVisible: true });

            setTimeout(() => {
                this.setState({ modalSuccessRegisterVisible: false });
                this.props.navigation.goBack();
            }, 1500);

        } catch (err) {
            showError(err);
        }
    };


    render() {

        const validations = []

        validations.push(this.state.name);
        validations.push(this.state.city);
        validations.push(this.state.state);
        validations.push(this.state.email);
        validations.push(this.state.whatsapp);
        validations.push(this.state.password);

        const validForm = validations.reduce((all, v) => all && v);
        
        return (
            <Container>

                <CustomModal
                    modalVisible={this.state.modalLoadingVisible}
                    disabledClose={true}>
                    <LoadingGif source={loadingGif} />
                    <TextModal>Cadastrando...</TextModal>
                </CustomModal>
                <CustomModal
                    modalVisible={this.state.modalSuccessRegisterVisible}
                    disabledClose={true}>
                    <IconAwesome name='thumbs-o-up' size={50} color={cmStyles.cl.primary} />
                    <TextModal>Cadastro realizado com sucesso!</TextModal>
                </CustomModal>

                <ScrollView>
                    <Content>
                        <TextInfo>Preencha os dados abaixo para se cadastrar.</TextInfo>

                        <WrapForm>
                            <Input
                                placeholder='Nome:'
                                value={this.state.name}
                                onChangeText={name => this.setState({ name })} />

                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flex: 2, paddingRight: 10 }}>
                                    <Input
                                        placeholder='Cidade:'
                                        value={this.state.city}
                                        onChangeText={city => this.setState({ city })} />
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Input
                                        placeholder='Estado:'
                                        autoCapitalize='characters'
                                        maxLength={2}
                                        value={this.state.state}
                                        onChangeText={state => this.setState({ state })} />
                                </View>
                            </View>

                            <Input
                                type='cel-phone'
                                placeholder='Celular'
                                value={this.state.whatsapp}
                                onChangeText={whatsapp => this.setState({ whatsapp })} />
                            <Input
                                autoCapitalize='none'
                                placeholder='E-mail'
                                keyboardType="email-address"
                                value={this.state.email}
                                onChangeText={email => this.setState({ email })} />
                            <Input
                                secureTextEntry={true}
                                placeholder='Senha'
                                value={this.state.password}
                                onChangeText={password => this.setState({ password })} />

                            <View style={{ marginBottom: 10 }}>
                                <Button
                                    disabled={ !validForm }
                                    onPress={() => this.createAccount()}>
                                    Criar conta
                                </Button>
                            </View>
                        </WrapForm>
                    </Content>

                </ScrollView>
            </Container>
        )
    }
}

export default Signup