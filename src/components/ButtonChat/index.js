import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container } from './styles';

export default props => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <Container btColor={props.btColor}>
                <Icon name='question-answer' size={30} color='#FFFFFF' />
            </Container>
        </TouchableOpacity>
    )
}