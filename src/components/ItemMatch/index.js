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
        <Container>
            {props.status === 0 ?
            <TouchableOpacity onPress={props.doExchange}>
                <WrapGames>
                    <Game source={{uri: props.matchGame}} />
                    <WrapIcon>
                        <IconExchange name='swap-horiz' />
                    </WrapIcon>
                    <Game source={{uri: props.myGame}} />
                </WrapGames>
            </TouchableOpacity>
            :
            <WrapGames>
                <Game source={{ uri: props.matchGame}} />
                <Game source={{ uri: props.myGame}} />
            </WrapGames>
            }
            <WrapChat>
                <Person>
                    <View>
                        <PersonPhoto source={props.personPhoto}/>
                    </View>
                    <View style={{flex:1,paddingHorizontal: 10, justifyContent: 'center'}}>
                        <PersonName>{props.personName}</PersonName>
                        <PersonAddress>{props.personAddress}</PersonAddress>
                    </View>
                </Person>
                {props.status === 0 ?
                    <WrapButtonChat>
                        <ButtonChat />
                    </WrapButtonChat>
                : props.status === 1 ?
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
