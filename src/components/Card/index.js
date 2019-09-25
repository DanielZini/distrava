import React from 'react';
import loafingGif from '../../../assets/img/loading.gif';
import { TouchableOpacity } from 'react-native';
import {
    Container,
    Card,
    GameImage,
    WrapTitle,
    Title,
    WrapPlatform,
    LogoPlatform,
    WrapLoadingGif,
    LoadingGif,
 } from './styles';

export default props => {
    return (
        <Container style={{ zIndex: props.order}}>
            <Card>
                <TouchableOpacity onPress={props.onPress} style={{zIndex: 2,width: '100%', height: '100%'}}>
                    <GameImage source={{ uri: props.gameSrc }} />

                    {/* <WrapTitle>
                        <Title>{props.title}</Title>
                    </WrapTitle> */}

                    <WrapPlatform>
                        <LogoPlatform source={{ uri: props.platformSrc }} />
                    </WrapPlatform>
                </TouchableOpacity>
                <WrapLoadingGif>
                    <LoadingGif source={loafingGif} />
                </WrapLoadingGif>
            </Card>
        </Container>
    )
}