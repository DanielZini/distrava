import styled from 'styled-components';
import cmStyles from '../../commonStyles';

export const Container = styled.View`
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
    padding: 15px 20px;
`
export const EmptyAlert = styled.Text`
    color: ${cmStyles.cl.primary};
    font-family: ${cmStyles.fontBold};
    text-transform: uppercase;
    font-size: 20px;
    padding: 0 30px;
    text-align: center;
`