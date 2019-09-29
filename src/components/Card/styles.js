import cmStyles from '../../commonStyles';
import styled from 'styled-components';

// export const Container = styled.View`
//     flex: 1;
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     justify-content: center;
//     align-items:center;
//     background-color: transparent;
// `
export const Card = styled.View`
    position: relative;
    width: 90%;
    height: 95%;
    max-width: 350px;
    max-height: 500px;
    min-height: 200px;
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
export const WrapTitle = styled.View`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index:2;
    justify-content:flex-end;
    align-items:flex-end;
`
export const Title = styled.Text`
    font-family: ${cmStyles.fontRegular};
    font-size: 16px;
    color: ${cmStyles.cl.primary};
    padding: 10px 15px;
    background-color: rgba(255, 255, 255, .85);
`
export const WrapPlatform = styled.View`
    position: absolute;
    top: 0;
    right: 0;
    width: 90px;
    height: 60px;
    border-top-right-radius: 5px;
    border-bottom-left-radius: 10px;
    background-color: rgba(255, 255, 255, .8);
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