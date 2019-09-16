import React from 'react';
import { TouchableOpacity } from 'react-native';
import { TextButton } from './styles';

export default props => {
    return (
        <TouchableOpacity>
            <TextButton txtColor={props.txtColor}>{props.children}</TextButton>
        </TouchableOpacity>
    )
}