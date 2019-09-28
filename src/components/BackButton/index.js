import React from 'react';
import { TouchableNativeFeedback } from 'react-native';
import { Container, TextButton } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default props => {
    return (
        <TouchableNativeFeedback onPress={props.onPress}>
            <Container mL={props.marginL} mT={props.marginT} btColor={props.btColor}>
                <Icon name='arrow-back' size={25} color='#FFF' />
            </Container>
        </TouchableNativeFeedback>
    )
}