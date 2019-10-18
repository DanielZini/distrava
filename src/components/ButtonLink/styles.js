import cmStyles from '../../commonStyles';
import styled from 'styled-components';

export const TextButton = styled.Text`
    font-family: ${cmStyles.fontRegular};
    font-size: ${props => props.fontSize ? props.fontSize : 20};
    text-align: ${props => props.textAlign ? props.textAlign : 'left'};
    color: ${props => props.txtColor || cmStyles.cl.second};
`