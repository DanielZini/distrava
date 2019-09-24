import cmStyles from '../../commonStyles';
import styled from 'styled-components';

export const Container = styled.View`
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
`
export const Content = styled.View`
    flex: 1;
    flex-wrap: wrap;
    justify-content:center;
    align-content: center;
    align-items: center;
    padding: 30px 10px;
    position: relative;
`
export const WrapImg = styled.View`
    width: 130px;
    height: 130px;
    overflow: hidden;
    border-radius: 10px;
    background-color: #FFF;
    /* background-color: ${cmStyles.cl.second}; */
    justify-content:center;
    align-items: center;
    margin-bottom: 10px;
`
export const ImgProfile = styled.Image`
    width: 100%;
    height: 100%;
    resize-mode: cover;
`
export const Name = styled.Text`
    padding: 0 20px;
    font-size: 20px;
    text-align: center;
    font-family: ${cmStyles.fontBold};
    color: ${cmStyles.cl.primary};
`
export const Menu = styled.View`
    margin-top: 15px;
`
