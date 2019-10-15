import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import loafingGif from '../../../assets/img/loading.gif';
import { TouchableOpacity } from 'react-native';
import {
    Card,
    GameImage,
    WrapTitle,
    Title,
    WrapAddress,
    Address,
    WrapPlatform,
    LogoPlatform,
    WrapLoadingGif,
    LoadingGif,
 } from './styles';

export default props => {

    return (
        <Card>
            <TouchableOpacity onPress={props.onPress} style={{zIndex: 2,width: '100%', height: '100%'}}>
                <WrapPlatform>
                    <LogoPlatform source={{ uri: props.platformSrc }} />
                </WrapPlatform>
                <GameImage source={{ uri: props.gameSrc }} />

                <WrapTitle>
                    <Title>{props.title}</Title>

                    <WrapAddress>
                        <Icon name='map-marker' size={15} color='#333' /><Address>{props.address}</Address>
                    </WrapAddress>
                </WrapTitle>

            </TouchableOpacity>
            <WrapLoadingGif>
                <LoadingGif source={loafingGif} />
            </WrapLoadingGif>
        </Card>
    )
}