import React from 'react';
import { TouchableOpacity, AsyncStorage } from 'react-native';
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

class Menu extends React.Component {

    state = {
        name: '',
        photo: '',
    }

    navScreen = (screen) => {
        this.props.navigation.navigate(screen);
    }

    componentDidMount = async () => {
        const json = await AsyncStorage.getItem('userData')
        const userData = JSON.parse(json) || {}

        this.setState({ name: userData.name })
    }
    
    render(){
        
        return(
            
            <Container>
                <Content>
                    <TouchableOpacity
                        onPress={() => this.navScreen('EditProfile')}>
                        <WrapImg>
                            <ImgProfile source={ defaultProfile }/>
                        </WrapImg>
                    </TouchableOpacity>
    
                    <Name>{this.state.name}</Name>
    
                    <WrapMenu>
                        <ButtonMenu onPress={() => this.navScreen('GamesProfile')} icon='gamepad'>Meus Jogos</ButtonMenu>
                        <ButtonMenu onPress={() => this.navScreen('EditProfile')} icon='edit'>Editar Perfil</ButtonMenu>
                        {/* <ButtonMenu onPress={() => this.navScreen('ConfigProfile')} icon='settings'>Preferências</ButtonMenu> */}
                        <ButtonMenu onPress={() => this.navScreen('CopyrightProfile')} icon='copyright' border='0px'>Sobre</ButtonMenu>
                    </WrapMenu>
                </Content>
                
            </Container>
        )

    }
}

export default Menu;