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
    max-height: 100%;
    width: 90%;
    height: 85%;
    max-width: 300px;
    max-height: 700px;
    overflow: hidden;
    border-radius: 10px;
    background-color: #f1f1f1;
    border: 3px solid #FFFFFF;
    shadow-color: #000;
    elevation: 8px;
`
export const GameImage = styled.Image`
    position: relative;
    resize-Mode: cover;
    align-self: center;
    width: 100%;
    max-width:100%;
    max-height: 100%;
`
export const WrapTitle = styled(LinearGradient)`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 50%;
    padding: 15px 20px;
    z-index:2;
    justify-content:flex-end;
`
export const Title = styled.Text`
    font-size: 22px;
    color: #FFFFFF;
    font-family: ${cmStyles.fontLight}
`