import cmStyles from '../../commonStyles';
import styled from 'styled-components';

export const Container = styled.View`
    flex: 1;
    width:100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    position: relative;
`
export const BackgroundOpacity = styled.View`
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0;
    background-color: rgba(0, 0, 0, .5);
    z-index: 1;
`
export const CloseButton = styled.View`
    position: absolute;
    top: 0px;
    right: 0px;
    margin-right: 5px;
    margin-top: -40px;
    z-index: 1;
`
export const Content = styled.View`
    width: 80%;
    align-items: center;
    justify-content: center;
    padding: 15px 30px;
    background-color: #FFFFFF;
    border-radius: 6px;
    position: relative;
    z-index: 2;
    shadow-color: #000000;
    elevation: 5px;
`
export const Title = styled.Text`
    font-family: ${cmStyles.fontBold};
    font-size: 20px;
    text-align: center;
    color: #333333;
    margin-bottom: 15px;
`