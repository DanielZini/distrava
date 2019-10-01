import cmStyles from '../../../commonStyles';
import styled from 'styled-components';
import { Animated } from 'react-native';

export const Container = styled.View`
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
`
export const Content = styled.View`
    flex: 1;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    padding: 10px;
    position: relative;
`
export const Footer = styled.View`
    height: 90px;
    flex-direction: row;
    align-items: center;
    align-content: center;
    width: 90%;
    margin: 0 auto;
`
export const WrapButton = styled.View`
    flex: 1;
    position: relative;
    padding: 0 12px;
    max-width: 300px;
`
export const TextButton = styled.Text`
    color: #FFFFFF;
    font-family: ${cmStyles.fontBold};
    text-transform: uppercase;
    font-size: 12px;
    margin-left: 5px;
`
export const EmptyAlert = styled.Text`
    color: ${cmStyles.cl.primary};
    font-family: ${cmStyles.fontBold};
    text-transform: uppercase;
    font-size: 20px;
    padding: 0 30px;
    text-align: center;
`
export const AnimatedView = styled(Animated.View)`
    /* flex: 1; */
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    justify-content: center;
    align-items:center;
    background-color: #f5f5f5;
    overflow: hidden;
`