import cmStyles from '../../commonStyles';
import styled from 'styled-components';

export const Container = styled.View`
    width: 100%;
    height: 50px;
    border-width: 1px;
    border-color: ${cmStyles.cl.second};
    border-radius: 6px;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
    overflow: hidden;
    background-color: rgba(255, 255, 255, .7);
`
export const ButtonSearch = styled.View`
    width: 55px;
    height: 50px;
    justify-content: center;
    align-items: center;
    background-color: ${cmStyles.cl.second};
`
export const InputText = styled.TextInput`
    font-family: ${cmStyles.fontRegular};
    font-size: 16px;
    margin-left: 12px;
    color: #333333;
    flex: 1;
`