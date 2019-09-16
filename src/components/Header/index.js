import React from 'react';
import symbol from '../../../assets/img/symbolDistrava_n.png';
import symbolD from '../../../assets/img/symbolDistrava_n2.png';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native';
import { 
    Container,
    ItemGrid,
    ButtonMenu,
    SymbolLogo
 } from './styles';

export default props => {
    return (
        <Container>
            <ItemGrid>
                <ButtonMenu active={props.perfil ? props.perfil : false}>
                    <TouchableOpacity>
                        <Icon name='person' size={35} color='#999' />
                    </TouchableOpacity>
                </ButtonMenu>
            </ItemGrid>
            <ItemGrid>
                <ButtonMenu symbol={true} active={props.home ? props.home : false}>
                    <TouchableOpacity>
                        <SymbolLogo source={props.home ? symbol : symbolD } />
                    </TouchableOpacity>
                </ButtonMenu>
            </ItemGrid>
            <ItemGrid>
                <ButtonMenu active={props.chat ? props.chat : false}>
                    <TouchableOpacity>
                        <Icon name='chat' size={30} color='#999' />
                    </TouchableOpacity>
                </ButtonMenu>
            </ItemGrid>
        </Container>
    )
}