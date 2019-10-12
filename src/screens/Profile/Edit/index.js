import React from 'react';
import { View, Keyboard, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import defaultProfile from '../../../../assets/img/defaultPerson.png';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import cmStyle from '../../../commonStyles';
import FlashMessage, { showMessage, hideMessage } from 'react-native-flash-message';
import ImagePicker from 'react-native-image-picker';
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';
import { server, showError } from '../../../common';
import { 
    Container,
    Content,
    WrapImg,
    ImgProfile,
    LabelEdit,
    Label,
    TouchArea,
    WrapForm,
} from './styles';

class Edit extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Editar Perfil',
            headerRight: <Icon name='edit' size={30} color='#FFFFFF' style={{ marginRight: 15 }} />,
        };
    };

    state = {
        preview: '',
        image: '',
        name: '',
        city: '',
        state: '',
        whatsapp: '',
        password: '',
        newPassword: '',
    }

    componentDidMount = () => {
        
        this.loadUser();
    }

    loadUser = async () => {
        try {
            const res = await axios.get(`${server}/get-user`);

            this.setState({
                name: res.data.name,
                preview: {
                    uri: server + '/' + res.data.photo,
                },
                city: res.data.city,
                state: res.data.state,
                whatsapp: res.data.whatsapp,
            })

        } catch (err) {
            showError(err);
        }
    }

    updateProfile = async () => {
        Keyboard.dismiss();
        
        try{

            if(this.state.image){
                const data = new FormData();
                data.append('file', this.state.image);
                data.append('type', this.state.image.type);

                await axios.post(`${server}/upload-photo`, data);
            }

            const newUserData = {
                name: this.state.name,
                city: this.state.city,
                state: this.state.state,
                whatsapp: this.state.whatsapp,
                password: this.state.password,
                newPassword: this.state.newPassword
            }

            await axios.post(`${server}/update-user`, newUserData);

            showMessage({
                message: "Cadastro atualizado!",
                type: "success",
            });
        }catch(err){

            showMessage({
                message: "Algo deu errado! Por favor, preencha os campos corretamente.",
                type: "danger",
                duration: 3000
            });
        }

    };

    handleSelectImage = () => {
        ImagePicker.showImagePicker(
            {
                title: "Selecionar Imagem",
                cancelButtonTitle: "Cancelar",
                takePhotoButtonTitle: "Tirar foto",
                chooseFromLibraryButtonTitle: "Abrir galeria"
            },
            upload => {
                if (upload.error) {
                    console.log("Error");
                } else if (upload.didCancel) {
                    console.log("User canceled");
                } else {
                    const preview = {
                        uri: `data:image/jpeg;base64,${upload.data}`
                    };

                    let prefix;
                    let ext;

                    if (upload.fileName) {
                        [prefix, ext] = upload.fileName.split(".");
                        ext = ext.toLowerCase() === "heic" ? "jpg" : ext;
                    } else {
                        prefix = new Date().getTime();
                        ext = "jpg";
                    }

                    const image = {
                        uri: upload.uri,
                        type: upload.type,
                        name: `${prefix}.${ext}`
                    };

                    this.setState({ preview, image });
                }
            }
        );
    };

    logout = () => {
        delete axios.defaults.headers.common['Authorization'];
        AsyncStorage.removeItem('userData');
        this.props.navigation.navigate('LoadingPage');
    }

    render(){
        return(
            <Container>
                <ScrollView>
                    <Content>

                        <WrapImg>
                            <TouchArea onPress={this.handleSelectImage}>
                                <ImgProfile source={ this.state.preview }/>
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
                                type='cel-phone'
                                placeholder='Whats App'
                                value={this.state.whatsapp}
                                onChangeText={whatsapp => this.setState({ whatsapp })} />
                            
                            <Label>Para trocar sua senha, informe a atual e nova nos campos abaixo:</Label>
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
                                onPress={() => this.logout()}
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