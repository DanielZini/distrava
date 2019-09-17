import React from 'react';
import cmStyles from '../../commonStyles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native';
import { Container, TextButton } from './styles';

export default props => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <Container hasBorder={props.border}>
                {props.icon &&
                    <Icon name={props.icon} size={30} color='#333333' />
                }
                <TextButton>{props.children}</TextButton>
            </Container>
        </TouchableOpacity>
    )
}