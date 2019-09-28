import cmStyles from '../../commonStyles';
import styled from 'styled-components';

export const Container = styled.View`
    width: 50px;
    height: 50px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-left: ${props => props.mL || '0px' };
    margin-top: ${props => props.mT || '0px' };
`
export const TextButton = styled.Text`
    font-family: ${cmStyles.fontBold};
    font-size: 20px;
    color: ${props => props.txtColor || '#FFFFFF'};
`