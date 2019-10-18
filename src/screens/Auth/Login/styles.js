import styled from 'styled-components';
import cmStyles from '../../../commonStyles';

export const Container = styled.View`
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
`

export const BackgroundPattern = styled.Image`
    position: absolute;
    width: 100%;
    height: 100%;
    resize-mode: repeat;
`
export const Logo = styled.Image`
    margin-bottom: 30;
    resize-Mode: contain;
`
export const WrapForm = styled.View`
    width: 80%;
    margin-bottom: 15px;
`
export const LoadingGif = styled.Image`
    height: 70px;
    resize-mode: contain;
`
export const TextModal = styled.Text`
    font-family: ${cmStyles.fontBold};
    font-size: 18px;
    text-align: center;
    margin-top: 15px;
    color: ${cmStyles.cl.primary};
`