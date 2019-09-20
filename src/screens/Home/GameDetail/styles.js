import cmStyles from '../../../commonStyles';
import styled from 'styled-components';

export const Container = styled.View`
    width: 100%;
    height: 100%;
`
export const Content = styled.View`
    flex: 1;
    flex-wrap: wrap;
    align-content: center;
    align-items: center;
    padding: 10px;
    position: relative;
`
export const GameImage = styled.Image`
    width: 100%;
    height: 100%;
    resize-Mode: cover;
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
