import cmStyles from '../../commonStyles';
import styled from 'styled-components';

export const Container = styled.View`
    height: 95px;
    width: 100%;
    align-items: center;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    background-color: ${props => props.screen === 'Match' ? '#f9f9f9' : '#FFFFFF'};
    position: relative;
    z-index:2;
`
export const BackgroundGray = styled.View`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 1;
    background-color: ${props => props.bg};
`
export const ItemGrid = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 0 30px;
`
export const ButtonMenu = styled.View`
    width: ${props => props.symbol ? '65px' : '50px'};
    height: ${props => props.symbol ? '65px' : '50px'};
    border-radius: 100px;
    shadow-color: #000;
    overflow: hidden;
    elevation: 5px;
    background-color:  ${props => props.active ? cmStyles.cl.second : '#f1f1f1'};
    /* background-color:  rgba(255, 255, 255, .7); */
    border: 3px solid #FFFFFF;
    justify-content: center;
    align-items: center;
    
`
export const SymbolLogo = styled.Image`
    resize-Mode: contain;
`
