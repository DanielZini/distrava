import React from 'react';
import { TouchableOpacity } from 'react-native';
import ButtonChat from '../../components/ButtonChat';
import Icon from 'react-native-vector-icons/FontAwesome';
import cmStyles from '../../commonStyles';
import {
    Container,
    WrapGames,
    Game,
    WrapIcon,
    IconExchange,
    WrapChat,
    Person,
    PersonPhoto,
    PersonName,
    WrapButtonChat,
} from './styles';

export default props => {
    return (
        <Container inNegotiation={props.inNegotiation}>
            <WrapGames>
                <Game source={props.matchGame} />
                {props.inNegotiation &&
                <WrapIcon>
                    <TouchableOpacity onPress={props.doExchange}>
                        <IconExchange name='swap-horiz' />
                    </TouchableOpacity>
                </WrapIcon>
                }
                <Game source={props.myGame} />
            </WrapGames>
            <WrapChat>
                <Person>
                    <PersonPhoto source={props.photoProfile}/>
                    <PersonName>{props.nameProfile}</PersonName>
                </Person>
                {props.inNegotiation ?
                    <WrapButtonChat>
                        <ButtonChat />
                    </WrapButtonChat>
                :
                    props.negotiationSuccess ?
                        <WrapButtonChat>
                            <Icon name='handshake-o' size={40} color={cmStyles.cl.second} />
                        </WrapButtonChat>
                    :
                        <WrapButtonChat>
                            <Icon name='thumbs-o-down' size={40} color={cmStyles.cl.second} />
                        </WrapButtonChat>
                }
            </WrapChat>
        </Container>
    )
}
