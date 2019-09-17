import React from 'react';
import defaultProfile from '../../../assets/img/defaultPerson.png';
import ButtonMenu from '../../components/ButtonMenu';
import { 
    Container,
    Content,
    WrapImg,
    ImgProfile,
    Name,
    Menu,
} from './styles';

const Profile = ({ navigation }) => {

    return(
        <Container>
            <Content>
                <WrapImg>
                    <ImgProfile source={defaultProfile}/>
                </WrapImg>
                <Name>Daniel Zini da Silva</Name>

                <Menu>
                    <ButtonMenu icon='gamepad'>Meus Jogos</ButtonMenu>
                    <ButtonMenu icon='edit'>Editar Perfil</ButtonMenu>
                    <ButtonMenu icon='settings'>Preferências</ButtonMenu>
                    <ButtonMenu icon='copyright' border='0px'>Sobre</ButtonMenu>
                </Menu>
            </Content>
            
        </Container>
    )
}

export default Profile;