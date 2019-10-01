import cmStyles from '../../../commonStyles';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components';

export const Container = styled.View`
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
    justify-content: center;
    align-content: center;
    align-items: center;
`
export const FullCard = styled.View`
    width: 95%;
    height: 95%;
    border: 4px solid #FFFFFF;
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    shadow-color: #000000;
    elevation: 7px;
    position: relative;
`
export const WrapImage = styled.View`
    width: 100%;
    height: 100%;
    /* opacity: .9; */
`
export const GameImage = styled.Image`
    width: 100%;
    height: 100%;
    resize-Mode: cover;
    overflow: hidden;
`
export const WrapPlatform = styled.View`
    position: absolute;
    top: 0;
    right: 0;
    width: 120px;
    height: 70px;
    border-bottom-left-radius: 10px;
    background-color: rgba(255, 255, 255, .8);
    padding: 5px;
`
export const PlatformImage = styled.Image`
    width: 100%;
    height: 100%;
    resize-Mode: contain;
    overflow: hidden;
`
export const Content = styled.View`
    width: 100%;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    justify-content: flex-end;
`
export const WrapTitle = styled.View`
    z-index:2;
    background-color: rgba(255, 255, 255, .85);
    padding: 10px 15px;
`
export const Title = styled.Text`
    font-family: ${cmStyles.fontRegular};
    font-size: 18px;
    color: ${cmStyles.cl.primary};
    text-align: center;
`
export const WrapAddress = styled.View`
    flex-direction: row;
    justify-content: center;
    align-content: center;
    align-items: center;
`
export const Address = styled.Text`
    font-family: ${cmStyles.fontRegular};
    font-size: 14px;
    color: #333333;
    margin-left: 5px;
    text-transform: uppercase;
`
export const WrapRating = styled.View`
    flex-direction: row;
`
export const ItemRating = styled.View`
    flex: 1;
    padding: 7px 10px;
    background-color: rgba(${cmStyles.cl.secondRGB}, .9);
    /* border-top-width: 1px; */
    border-right-width: 1px;
    border-color: #f29948;
`
export const Label = styled.Text`
    text-align: center;
    font-family: ${cmStyles.fontRegular};
    font-size: 13px;
    color: #FFFFFF;
    margin-bottom: 2px;
`