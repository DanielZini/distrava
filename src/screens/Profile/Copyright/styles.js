import cmStyles from '../../../commonStyles';
import styled from 'styled-components';

export const Container = styled.View`
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
`
export const Content = styled.View`
    flex: 1;
    justify-content:center;
    align-content: center;
    align-items: center;
    padding: 40px;
    position: relative;
`
export const Logo = styled.Image`
    height: 90px;
    margin-bottom: 30px;
    resize-Mode: contain;
`
export const TextAbout = styled.Text`
    font-family: ${cmStyles.fontRegular};
    font-size: 16px;
    line-height: 24px;
    color: #444;
    text-align: justify;
    margin-bottom: 15px;
`
export const Bold = styled.Text`
    font-family: ${cmStyles.fontBold};

`
export const SocialLink = styled.View`
    width: 50px;
    height: 50px;
    text-align: justify;
    justify-content: center;
    align-items: center;
    background-color: ${cmStyles.cl.primary};
    border-radius: 15px;
    border: 3px solid #FFFFFF;
    shadow-color: #000000;
    elevation: 5px;
`