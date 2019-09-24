import cmStyles from '../../commonStyles';
import styled from 'styled-components';

export const Container = styled.View`
    width: 100%;
    height: 50px;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.btColor || cmStyles.cl.primary};
    border-radius: 6px;
    flex-direction: row;
    border: 2px solid #FFF;
    shadow-color: #000000;
    elevation: 2px;
`
export const TextButton = styled.Text`
    font-family: ${cmStyles.fontBold};
    font-size: 20px;
    color: ${props => props.txtColor || '#FFFFFF'};
`