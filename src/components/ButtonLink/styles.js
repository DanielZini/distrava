import cmStyles from '../../commonStyles';
import styled from 'styled-components';

export const TextButton = styled.Text`
    font-family: ${cmStyles.fontRegular};
    font-size: 20;
    color: ${props => props.txtColor || cmStyles.cl.second};
`