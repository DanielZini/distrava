import cmStyles from '../../../commonStyles';
import styled from 'styled-components';

export const Container = styled.View`
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
`
export const NavSteps = styled.View`
    margin: 20px 0 0 0;
`
export const ItemStep = styled.View`
    padding: 20px 0 0 0;
`
export const WrapActionButtons = styled.View`
    padding: 15px;
    flex-direction: row;
    justify-content: space-between;
`
export const ButtonItem = styled.View`
    width: 48%;
`
export const WrapSearchInput = styled.View`
    padding: 0 15px;
    flex-direction: row;
    margin-bottom: 10px;
`
export const ListCards = styled.View`
    flex: 1;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`
export const DescStep = styled.Text`
    width: 100%;
    font-family: ${cmStyles.fontRegular};
    font-size: 14px;
    text-align: center;
    margin-bottom: 15px;
    color: ${cmStyles.cl.primary};
`