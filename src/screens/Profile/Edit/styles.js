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
    padding: 30px 10px;
    position: relative;
`
export const WrapImg = styled.View`
    width: 150px;
    height: 150px;
    overflow: hidden;
    border-radius: 10px;
    background-color: #FFF;
    /* background-color: ${cmStyles.cl.second}; */
    justify-content:center;
    align-items: center;
    margin-bottom: 20px;
`
export const ImgProfile = styled.Image`
    width: 100%;
    height: 100%;
    resize-mode: cover;
`
export const LabelEdit = styled.Text`
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .8);
    padding: 5px;
    font-size: 18px;
    text-align: center;
    font-family: ${cmStyles.fontRegular};
    color: #FFFFFF;
`
export const Menu = styled.View`
    margin-top: 15px;
`
export const TouchArea = styled.TouchableOpacity`
    width: 100%;
    height: 100%;
`
export const WrapForm = styled.View`
    width: 350px;
    max-width: 100%

`