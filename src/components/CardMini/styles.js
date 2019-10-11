import cmStyles from '../../commonStyles';
import styled from 'styled-components';

export const GridCard = styled.View`
    width: 48%;
    height: ${props => props.isPlatform ? '120px' : '250px' };
    margin-bottom: 15px;
`
export const Card = styled.View`
    width: 100%;
    height: 100%;
    background-color: #FFFFFF;
    border-radius: 10px;
    border: 3px;
    border-color: ${props => props.active ? cmStyles.cl.second : '#FFFFFF'};
    shadow-color: #000000;
    elevation: 7px;
    align-content: center;
    justify-content: center;
    position: relative;
`
export const ButtonDel = styled.View`
    position: absolute;
    top:0;
    left: 0;
    width: 40px;
    height: 40px;
    margin-left: -10px;
    margin-top: -10px;
    border-radius: 50px;
    background-color: #FFFFFF;
    z-index: 10;
    shadow-color: #000000;
    elevation: 7px;

`
export const TouchArea = styled.TouchableOpacity`
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`
export const GameImage = styled.Image`
    width: 100%;
    height: 100%;
    resize-mode: cover;
    border-radius: 8px;
    overflow: hidden;
    opacity: ${props => props.active ? '.5' : '1'};
`
export const WrapPlatform = styled.View`
    position: absolute;
    top: 0;
    right: 0;
    width: 80px;
    height: 50px;
    border-bottom-left-radius: 10px;
    background-color: rgba(255, 255, 255, .9);
    z-index: 2;
    padding: 10px;
`
export const PlatformImage = styled.Image`
    width: 100%;
    height: 100%;
    overflow: hidden;
    resize-Mode: cover;
`
export const BigPlatformImage = styled.Image`
    width: 90%;
    height: 90%;
    overflow: hidden;
    resize-Mode: contain;
    opacity: ${props => props.active ? '.5' : '1'};
`
export const WrapStatus = styled.View`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .7);
    justify-content: center;
    align-items: center;
    padding: 10px;
    z-index: 3;
`
export const TextStatus = styled.Text`
    font-family: ${cmStyles.fontBold};
    color: #FFFFFF;
    font-size: 22px;
`