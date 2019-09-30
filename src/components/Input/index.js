import React from 'react';
import cmStyles from '../../commonStyles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, WrapIcon, InputText, InputTextMask } from './styles';

export default props => {
    return (
        <Container>
            {props.icon &&
            <WrapIcon>
                <Icon name={props.icon} size={20} color={cmStyles.cl.primary} /> 
            </WrapIcon>}

            {props.type ?
                <InputTextMask 
                    type={props.type}
                    options={{
                        maskType: 'BRL',
                        withDDD: true,
                        dddMask: '(99) '
                    }}
                    {...props} />
            :
                <InputText {...props} placeholderTextColor='#AAA' />
            }
        </Container>
    )
}