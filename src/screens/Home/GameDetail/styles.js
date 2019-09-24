import cmStyles from '../../../commonStyles';
import styled from 'styled-components';

export const Container = styled.View`
    width: 100%;
    height: 100%;
    padding-bottom: 20px;
`
export const WrapImage = styled.View`
    width: 100%;
    height: 400px;
`
export const GameImage = styled.Image`
    width: 100%;
    height: 100%;
    resize-Mode: cover;
    /* border: 5px solid #FFFFFF; */
    /* border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px; */
    overflow: hidden;
`
export const Content = styled.View`
    width: 100%;
    padding: 5px 15px;
    position: relative;
`
export const GameTitle = styled.Text`
    font-family: ${cmStyles.fontBold};
    color: ${cmStyles.cl.primary};
    font-size: 23px;
    margin-bottom: 10px;
`
export const WrapRating = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
`
export const ItemRating = styled.View`
    width: 50%;
    height: 80px;
    padding: 10px;
    background-color: ${props => props.noBg ? 'transparent' : '#f4f4f4'};
    border: 1px solid #FFFFFF;
`
export const Label = styled.Text`
    text-align: center;
    font-family: ${cmStyles.fontRegular};
    font-size: 14px;
    color: ${cmStyles.cl.second};
    margin-bottom: 5px;
`