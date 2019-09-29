import React from 'react';
import { Animated } from 'react-native';
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

    // moveAnimation = new Animated.ValueXY({ x: 0, y: 0 })
    // fadeAnimation = new Animated.Value(1)

    // componentDidMount =  () => {
        
    // }
    // animationNextGame = async  () => {
    //     await Animated.parallel([
    //         await Animated.timing(this.fadeAnimation, {
    //             toValue: 0,
    //             duration: 300
    //         }),
    //         await Animated.spring(this.moveAnimation, {
    //             toValue: { x: 200, y: -200 },
    //             duration: 1000
    //         }),
    //     ]).start();
    // }

    return (
        // <Container style={{ zIndex: props.order}}>
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
        // </Container>
    )
}