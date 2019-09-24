import LinearGradient from 'react-native-linear-gradient';
import cmStyles from '../../commonStyles';
import styled from 'styled-components';

export const Container = styled.View`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    justify-content: center;
    align-items:center;
    background-color: transparent;
`
export const Card = styled.View`
    position: relative;
    max-width:100%;
    max-height: 500px;
    width: 90%;
    height: 95%;
    max-width: 300px;
    max-height: 700px;
    overflow: hidden;
    border-radius: 10px;
    background-color: #f1f1f1;
    border: 3px solid #FFFFFF;
    shadow-color: #000000;
    elevation: 7px;
`
export const GameImage = styled.Image`
    position: relative;
    resize-Mode: cover;
    align-self: center;
    width:100%;
    height: 100%;
`
export const WrapTitle = styled(LinearGradient)`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 20%;
    z-index:2;
    justify-content:flex-end;
    align-items:flex-end;
`
export const Title = styled.Text`
    width: 100%;
    font-size: 22px;
    color: #FFFFFF;
    font-family: ${cmStyles.fontLight};
    padding: 20px;
    text-align: center;
`
export const WrapPlatform = styled.View`
    position: absolute;
    top: 0;
    right: 0;
    width: 90px;
    height: 60px;
    border-top-right-radius: 5px;
    border-bottom-left-radius: 10px;
    background-color: #FFFFFF;
    padding: 5px;
`
export const LogoPlatform = styled.Image`
    position: relative;
    resize-Mode: contain;
    width:100%;
    height: 100%;
`
export const WrapLoadingGif = styled.View`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    resize-Mode: cover;
    z-index: 1;
    justify-content: center;
    align-items: center;
`
export const LoadingGif = styled.Image`
    width: 70px;
    resize-Mode: contain;

`