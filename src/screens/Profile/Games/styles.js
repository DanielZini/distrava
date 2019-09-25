import cmStyles from '../../../commonStyles';
import styled from 'styled-components';

export const Container = styled.View`
    width: 100%;
    height: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;
    padding: 30px 20px;
`
export const ItemGame = styled.View`
    width: 48%;
    height: 250px;
    position: relative;
    /* overflow: hidden; */
    background-color: #f1f1f1;
    border-radius: 10px;
    border: 3px solid #FFFFFF;
    shadow-color: #000000;
    elevation: 7px;
    align-content: center;
    justify-content: center;
    margin-bottom: 15px;
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
export const ToucheArea = styled.TouchableOpacity`
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`
export const GameImage = styled.Image`
    width: 100%;
    height: 100%;
    resize-mode: cover;
    border-radius: 10px;
    overflow: hidden;
`
export const WrapPlatform = styled.View`
    position: absolute;
    top: 0;
    right: 0;
    width: 80px;
    height: 50px;
    border-bottom-left-radius: 10px;
    background-color: rgba(255, 255, 255, .9);
    padding: 10px;
    z-index: 2;
`
export const PlatformImage = styled.Image`
    width: 100%;
    height: 100%;
    resize-Mode: cover;
    overflow: hidden;
`