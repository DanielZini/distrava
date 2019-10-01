import React from 'react';
import { View } from 'react-native';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import FlashMessage, { showMessage, hideMessage } from 'react-native-flash-message';
import { ScrollView } from 'react-native-gesture-handler';
import {
    Container,
    WrapForm,
    TextInfo,
    Content,
} from './styles';

class Signup extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Criar conta',
        };
    };

    state = {
        name: '',
        city: '',
        state: '',
        email: '',
        whatsapp: '',
        password: '',
    }

    createAccount = () => {
        showMessage({
            message: "Conta Criada!",
            type: "success",
        });
        setTimeout(() => {
            this.props.navigation.goBack();
        }, 1000);
    };


    render() {
        return (
            <Container>
                <ScrollView>
                    <Content>
                        <TextInfo>Preencha os dados abaixo para se cadastra.</TextInfo>

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
                                placeholder='Whats App'
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
                                placeholder='Senha atual'
                                value={this.state.password}
                                onChangeText={password => this.setState({ password })} />

                            <View style={{ marginBottom: 10 }}>
                                <Button
                                    onPress={() => this.createAccount()}>
                                    Criar conta
                                </Button>
                            </View>
                        </WrapForm>
                    </Content>

                    <FlashMessage position="top" />
                </ScrollView>
            </Container>
        )
    }
}

export default Signup