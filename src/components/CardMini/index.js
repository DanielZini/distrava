import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
    GridCard,
    Card,
    ButtonDel,
    TouchArea,
    GameImage,
    WrapPlatform,
    PlatformImage,
    BigPlatformImage,
    WrapStatus,
    TextStatus
 } from './styles';

export default props => {
    return (
        <GridCard isPlatform={props.isPlatform}>
            {props.newGame ? 
                <Card active={props.active}>
                    <TouchArea onPress={props.onSelect}>
                        {props.isPlatform ? 
                            <BigPlatformImage active={props.active} source={{ uri: props.platformUri }} />
                        :
                            <GameImage active={props.active} source={{ uri: props.gameUri }} />
                        }
                    </TouchArea>
                </Card>
                :
                <Card>
                    <ButtonDel>
                        <TouchArea onPress={props.onExclude}>
                            <Icon name='delete-forever' size={25} color='#c32020' />
                        </TouchArea>
                    </ButtonDel>
                    <TouchArea onPress={props.onOpen}>
                        <WrapPlatform>
                            <PlatformImage source={{ uri: props.imgPlatform }} />
                        </WrapPlatform>
                        <GameImage source={{ uri: props.imgGame }} />
                    { props.status == 1 &&
                        <WrapStatus>
                            <TextStatus>EM TROCA!</TextStatus>
                        </WrapStatus>
                    }
                    {props.status == 2 &&
                        <WrapStatus>
                            <TextStatus>TROCADO!</TextStatus>
                        </WrapStatus>
                    }
                    </TouchArea>
                </Card>
            }
        </GridCard>
    )
}