import cmStyles from '../../commonStyles';
import styled from 'styled-components';

export const Container = styled.View`
    width: 270px;
    height: 50px;
    background-color: #FFFFFF;
    align-items: center;
    flex-direction: row;
    padding: 5px 15px;
    border-bottom-width: ${props => props.hasBorder || '1px'};
    border-color: #CCCCCC;
`

export const TextButton = styled.Text`
    font-family: ${cmStyles.fontRegular};
    font-size: 20px;
    color: #333333;
    margin-left: 15px;
`