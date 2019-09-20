import React from 'react';
import { TouchableOpacity } from 'react-native';
import { 
    Container,
    Card,
    GameImage,
    WrapTitle,
    Title,
 } from './styles';

export default props => {
    return (
        <Container style={{ zIndex: props.order}}>
            <Card>
                <TouchableOpacity onPress={props.onPress} style={{width: '100%', height: '100%'}}>
                    <GameImage source={props.gameSrc} />
                    <WrapTitle
                        start={{ x: 0, y: 1 }}
                        end={{ x: 0, y: 0 }}
                        colors={['rgba(0,0,0,1)', 'rgba(0,0,0,.0)']}>

                        <Title>{props.title}</Title>
                    </WrapTitle>
                </TouchableOpacity>
            </Card>
        </Container>
    )
}