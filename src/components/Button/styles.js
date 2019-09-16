import cmStyles from '../../commonStyles';
import styled from 'styled-components';

export const Container = styled.View`
    width: 100%;
    height: 50px;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.btColor || cmStyles.cl.primary};
    border-radius: 6px;
    margin-bottom: 15px;
    flex-direction: row;
`

export const TextButton = styled.Text`
    font-family: ${cmStyles.fontBold};
    font-size: 20px;
    color: ${props => props.txtColor || '#FFFFFF'};;
`