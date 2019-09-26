import cmStyles from '../../../commonStyles';
import styled from 'styled-components';

export const Container = styled.View`
    width: 100%;
    height: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;
    padding: 30px 20px;
`
export const ItemGame = styled.View`
    width: 48%;
    height: 250px;
    position: relative;
    /* overflow: hidden; */
    background-color: #FFFFFF;
    border-radius: 10px;
    border: 3px solid #FFFFFF;
    shadow-color: #000000;
    elevation: 7px;
    align-content: center;
    justify-content: center;
    margin-bottom: 15px;
    position: relative;
`
export const TouchArea = styled.TouchableOpacity`
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`