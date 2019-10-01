import React from 'react';
import { TouchableOpacity } from 'react-native';
import defaultProfile from '../../../../assets/img/defaultPerson.png';
import ButtonMenu from '../../../components/ButtonMenu';
import { 
    Container,
    Content,
    WrapImg,
    ImgProfile,
    Name,
    WrapMenu,
} from './styles';

const Menu = ({ navigation }) => {

    const navScreen = (screen) => {
        navigation.navigate(screen);
    }

    return(
        <Container>
            <Content>
                <TouchableOpacity
                    onPress={() => navScreen('EditProfile')}>
                    <WrapImg>
                        <ImgProfile source={defaultProfile}/>
                    </WrapImg>
                </TouchableOpacity>

                <Name>Daniel Zini da Silva</Name>

                <WrapMenu>
                    <ButtonMenu onPress={() => navScreen('GamesProfile')} icon='gamepad'>Meus Jogos</ButtonMenu>
                    <ButtonMenu onPress={() => navScreen('EditProfile')} icon='edit'>Editar Perfil</ButtonMenu>
                    {/* <ButtonMenu onPress={() => navScreen('ConfigProfile')} icon='settings'>Preferências</ButtonMenu> */}
                    <ButtonMenu onPress={() => navScreen('CopyrightProfile')} icon='copyright' border='0px'>Sobre</ButtonMenu>
                </WrapMenu>
            </Content>
            
        </Container>
    )
}

export default Menu;