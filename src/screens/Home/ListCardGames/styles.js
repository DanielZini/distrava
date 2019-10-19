import cmStyles from '../../../commonStyles';
import styled from 'styled-components';
import { Animated } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
`
export const Content = styled.View`
    flex: 1;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    padding: 10px;
    position: relative;
`
export const Footer = styled.View`
    height: 90px;
    flex-direction: row;
    align-items: center;
    align-content: center;
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
    font-size: ${props => props.fontSize ? props.fontSize : '12px'};
    margin-left: 5px;
`
export const EmptyAlert = styled.Text`
    color: ${cmStyles.cl.primary};
    font-family: ${cmStyles.fontBold};
    text-transform: uppercase;
    font-size: 20px;
    padding: 0 30px;
    text-align: center;
`
export const TextInfo = styled.Text`
    color: #333333;
    font-family: ${cmStyles.fontRegular};
    font-size: 20px;
    padding: 0 30px;
    margin: 20px 0 10px 0;
    text-align: center;
`
export const ButtonReload = styled.View`
    margin-top: 15px;
    background-color: ${cmStyles.cl.primary};
    border: 3px solid #FFFFFF;
    width: 55px;
    height: 55px;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
`
export const AnimatedView = styled(Animated.View)`
    /* flex: 1; */
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    justify-content: center;
    align-items:center;
    background-color: #f5f5f5;
    overflow: hidden;
`
export const WrapLoadingBg = styled.View`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    justify-content: center;
    align-items:center;
    overflow: hidden;
`
export const BgLoading = styled.Image`
    resize-Mode: contain;
    width: 100px;
`
export const TitleModalMatch = styled.Text`
    font-family: ${cmStyles.fontBold};
    font-size: 25px;
    color: ${cmStyles.cl.primary};
    margin-bottom: 15px;
`
export const WrapGames = styled.View`
    width: 100%;
    justify-content: space-between;
    position: relative;
    margin-bottom: 15px;
    flex-direction: row;
`
export const Game = styled.Image`
    width: 48%;
    height: 200px;
    border-radius: 10px;
    overflow: hidden;
    resize-mode: cover;
`
export const WrapIcon = styled.View`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50px;
    height: 50px;
    z-index: 2;
    margin-left: -25px;
    margin-top: -25px;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    border: 2px solid #FFFFFF;
    background-color: rgba(${cmStyles.cl.secondRGB}, .9);
`
export const IconExchange = styled(Icon)`
    font-size: 40px;
    color: #FFFFFF;
`
