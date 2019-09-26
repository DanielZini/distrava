import React from 'react';
import { TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { Container, TextButton } from './styles';

export default props => {
    
    return (
        <View>
        { props.disabled ? 
            <TouchableWithoutFeedback disabled={true}>
                <Container btColor={props.btColor} disabled={true}>
                    {!props.custom ?
                        <TextButton txtColor={props.txtColor}>{props.children}</TextButton>
                        : props.children}
                </Container>
            </TouchableWithoutFeedback>
            :
            <TouchableOpacity onPress={props.onPress}>
                <Container btColor={props.btColor}>
                    {!props.custom ?
                        <TextButton txtColor={props.txtColor}>{props.children}</TextButton>
                        : props.children}
                </Container>
            </TouchableOpacity>
            }
        </View>
    )
}