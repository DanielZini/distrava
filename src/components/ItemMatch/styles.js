import cmStyles from '../../commonStyles';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
    padding: 15px;
    position: relative;
    background-color: #FFFFFF;
    shadow-color: #000;
    elevation: ${props => props.inNegotiation ? '8px' : '0px'};
    border-width: ${props => props.inNegotiation ? '0px' : '1px'};
    border-color: #e5e5e5;
    border-radius: 10px;
    margin-bottom: 15px;
`
export const WrapGames = styled.View`
    width: 100%;
    justify-content: space-between;
    flex-direction: row;
    position: relative;
    margin-bottom: 15px;
`
export const Game = styled.Image`
    width: 48%;
    height: 150px;
    border-radius: 10px;
    overflow: hidden;
    resize-mode: cover;
`
export const WrapIcon = styled.View`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 60px;
    height: 60px;
    z-index: 2;
    margin-left: -30px;
    margin-top: -30px;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    border: 2px solid #FFFFFF;
    background-color: rgba(${cmStyles.cl.secondRGB}, .9);
`
export const IconExchange = styled(Icon)`
    font-size: 50px;
    color: #FFFFFF;
`
export const WrapChat = styled.View`
    flex-direction: row;
    align-items: center;
    align-content: center;
    justify-content: center;
`
export const Person = styled.View`
    flex-direction: row;
    flex: 1;
    align-items: center;
`
export const PersonPhoto = styled.Image`
    width: 60px;
    height: 60px;
    border-radius: 50px;
    border-width: 1px;
    border-color: #CCCCCC;
    background-color: #f1f1f1;
    resize-mode: cover;
`
export const PersonName = styled.Text`
    flex: 1;
    font-family: ${cmStyles.fontBold};
    color: ${cmStyles.cl.primary};
    font-size: 17px;
    line-height: 20px;
    margin-left: 10px;
    margin-right: 10px;
    flex-wrap: wrap;
`
export const WrapButtonChat = styled.View`
    width: 70px;
    justify-content: center;
    align-content: center;
    align-items: center;
`

