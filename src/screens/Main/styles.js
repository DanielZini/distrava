import cmStyles from '../../commonStyles';
import styled from 'styled-components';

export const Container = styled.View`
    width: 100%;
    height: 100%;
    background-color: #FFFFFF;
`
export const Content = styled.View`
    flex: 1;
    flex-wrap: wrap;
    justify-content:center;
    align-content: center;
    align-items: center;
    padding: 10px;
    position: relative;
`
export const Footer = styled.View`
    height: 80px;    
    flex-direction: row;
    width: 90%;
    margin: 0 auto;
`
export const WrapButton = styled.View`
    flex: 1;
    position: relative;
    padding: 0 12px;
    max-width: 300px;
`
export const TextButton = styled.Text`
    color: #FFFFFF;
    font-family: ${cmStyles.fontBold};
    text-transform: uppercase;
    font-size: 12px;
    margin-left: 5px;
`
