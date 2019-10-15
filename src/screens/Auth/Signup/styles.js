import cmStyles from '../../../commonStyles';
import styled from 'styled-components';

export const Container = styled.View`
    height: 100%;
    background-color: #f5f5f5;
    justify-content:center;
    align-items: center;
    align-content: center;
`
export const Content = styled.View`
    background-color: #f5f5f5;
    justify-content:center;
    align-items: center;
    align-content: center;
    padding: 50px 20px;
`
export const TextInfo = styled.Text`
    font-family: ${cmStyles.fontRegular};
    font-size: 16px;
    color: ${cmStyles.cl.primary};
    text-align: center;
    margin-bottom: 15px;
`
export const WrapForm = styled.View`
    width: 350px;
    max-width: 100%;
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