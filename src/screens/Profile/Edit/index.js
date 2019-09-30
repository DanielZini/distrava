import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import defaultProfile from '../../../../assets/img/defaultPerson.png';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import cmStyle from '../../../commonStyles';
import FlashMessage, { showMessage, hideMessage } from 'react-native-flash-message';
import { 
    Container,
    Content,
    WrapImg,
    ImgProfile,
    LabelEdit,
    TouchArea,
    WrapForm,
} from './styles';
import { ScrollView } from 'react-native-gesture-handler';

const dataUser = 
{
    name: 'Daniel Zini da Silva',
    city: 'Elias Fausto',
    state: 'SP',
    email: 'daniel@jgwebcom.com',
    whatsapp: '(19) 99617-0919',
    password: '',
    newPassword: '',
}

class Edit extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Editar Perfil',
            headerRight: <Icon name='edit' size={30} color='#FFFFFF' style={{ marginRight: 15 }} />,
        };
    };

    state = {
        name: '',
        city: '',
        state: '',
        email: '',
        whatsapp: '',
        password: '',
        newPassword: '',
    }

    componentDidMount = async () => {
        this.setState({ ...dataUser });
    }

    updateProfile = () => {
        showMessage({
            message: "Cadastro atualizado!",
            type: "success",
        });
    };

    render(){
        return(
            <Container>
                <ScrollView>
                    <Content>

                        <WrapImg>
                            <TouchArea>
                                <ImgProfile source={defaultProfile}/>
                                <LabelEdit>Trocar foto</LabelEdit>
                            </TouchArea>
                        </WrapImg>

                        <WrapForm>
                            <Input
                                placeholder='Nome:'
                                value={this.state.name}
                                onChangeText={name => this.setState({ name })} />
                            
                            <View style={{flexDirection: 'row'}}>
                                <View style={{flex: 2, paddingRight: 10}}>
                                    <Input
                                        placeholder='Cidade:'
                                        value={this.state.city}
                                        onChangeText={city => this.setState({ city })} />
                                </View>
                                <View style={{flex: 1}}>
                                    <Input
                                        placeholder='Estado:'
                                        autoCapitalize='characters'
                                        maxLength={2}
                                        value={this.state.state}
                                        onChangeText={state => this.setState({ state })} />
                                </View>
                            </View>

                            <Input
                                autoCapitalize='none'
                                placeholder='E-mail'
                                keyboardType="email-address"
                                value={this.state.email}
                                onChangeText={email => this.setState({ email })} />
                            <Input
                                type='cel-phone'
                                placeholder='Whats App'
                                value={this.state.whatsapp}
                                onChangeText={whatsapp => this.setState({ whatsapp })} />
                            <Input
                                secureTextEntry={true}
                                placeholder='Senha atual'
                                value={this.state.password}
                                onChangeText={password => this.setState({ password })} />
                            <Input
                                secureTextEntry={true}
                                placeholder='Nova Senha'
                                value={this.state.newPassword}
                                onChangeText={newPassword => this.setState({ newPassword })} />

                            <View style={{ marginBottom: 10 }}>
                                <Button 
                                    onPress={() => this.updateProfile()}>
                                    Atualizar
                                </Button>
                            </View>
                            <Button 
                                btColor={cmStyle.cl.second}>
                                Sair
                            </Button>
                        </WrapForm>

                    </Content>
                </ScrollView>
                <FlashMessage position="top" />
            </Container>
        )
    }
}

export default Edit;