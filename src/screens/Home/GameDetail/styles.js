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
    width: 150px;
    height: 90px;
    border-bottom-left-radius: 10px;
    background-color: #FFFFFF;
    padding: 5px;
`
export const PlatformImage = styled.Image`
    width: 100%;
    height: 100%;
    resize-Mode: contain;
    /* border: 5px solid #FFFFFF; */
    /* border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px; */
    overflow: hidden;
`
export const Content = styled(LinearGradient)`
    width: 100%;
    padding: 5px 15px;
    position: absolute;
    top: 50%;
    bottom: 0;
    right: 0;
    left: 0;
`
export const GameTitle = styled.Text`
    font-family: ${cmStyles.fontBold};
    color: #FFFFFF;
    font-size: 23px;
    margin-bottom: 10px;
`
export const WrapRating = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
`
export const ItemRating = styled.View`
    width: 100%;
    height: 80px;
    padding: 10px;
    /* background-color: ${props => props.noBg ? 'transparent' : '#f4f4f4'}; */
    /* border: 1px solid #FFFFFF; */
`

export const Label = styled.Text`
    text-align: center;
    font-family: ${cmStyles.fontRegular};
    font-size: 14px;
    color: ${cmStyles.cl.second};
    margin-bottom: 5px;
`