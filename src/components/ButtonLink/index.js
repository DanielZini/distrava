import React from 'react';
import { TouchableOpacity } from 'react-native';
import { TextButton } from './styles';

export default props => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <TextButton
                txtColor={props.txtColor}
                fontSize={props.fontSize}
                textAlign={props.textAlign}>
                    {props.children}
                </TextButton>
        </TouchableOpacity>
    )
}