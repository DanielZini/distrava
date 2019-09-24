import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Container, TextButton } from './styles';

export default props => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <Container btColor={props.btColor}>
                {!props.custom ?
                <TextButton txtColor={props.txtColor}>{props.children}</TextButton>
                : props.children }
            </Container>
        </TouchableOpacity>
    )
}