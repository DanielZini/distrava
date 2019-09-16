import cmStyles from '../../commonStyles';
import styled from 'styled-components';

export const Container = styled.View`
    height: 80px;
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    /* background-color: ${cmStyles.cl.primary}; */
`
export const ItemGrid = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 0 15px;
`
export const ButtonMenu = styled.View`
    width: ${props => props.symbol ? '75px' : '55px'};
    height: ${props => props.symbol ? '75px' : '55px'};
    margin-top: ${props => props.symbol ? '40px' : '15px'};
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
