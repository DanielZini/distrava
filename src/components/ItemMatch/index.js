import React from 'react';
import { View } from 'react-native';
import ButtonChat from '../../components/ButtonChat';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native';
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
    PersonAddress,
    WrapButtonChat,
} from './styles';

export default props => {
    return (
        <Container inNegotiation={props.inNegotiation}>
            {props.inNegotiation ?
            <TouchableOpacity onPress={props.doExchange}>
                <WrapGames>
                        <Game source={props.matchGame} />
                        <WrapIcon>
                                <IconExchange name='swap-horiz' />
                        </WrapIcon>
                        <Game source={props.myGame} />
                </WrapGames>
            </TouchableOpacity>
            :
            <WrapGames>
                <Game source={props.matchGame} />
                <Game source={props.myGame} />
            </WrapGames>
            }
            <WrapChat>
                <Person>
                    <View>
                        <PersonPhoto source={props.photoProfile}/>
                    </View>
                    <View style={{flex:1,paddingHorizontal: 10, justifyContent: 'center'}}>
                        <PersonName>{props.nameProfile}</PersonName>
                        <PersonAddress>{props.addressProfile}</PersonAddress>
                    </View>
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
