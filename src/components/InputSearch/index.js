import React from 'react';
import { TouchableOpacity } from 'react-native';
import cmStyles from '../../commonStyles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, ButtonSearch, InputText } from './styles';

export default props => {
    return (
        <Container>
            <InputText {...props} placeholderTextColor='#AAA' />
            <TouchableOpacity>
                <ButtonSearch btColor={cmStyles.cl.second} custom={true}>
                    <Icon name='search' size={30} color='#FFFFFF' />
                </ButtonSearch>
            </TouchableOpacity>
        </Container>
    )
}