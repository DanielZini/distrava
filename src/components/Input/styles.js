import cmStyles from '../../commonStyles';
import styled from 'styled-components';
import { TextInputMask } from 'react-native-masked-text'

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
export const WrapIcon = styled.View`
    width: 50px;
    justify-content: center;
    align-items: center;
    border-right-width: 1px;
    border-color: ${cmStyles.cl.second};
`
export const InputText = styled.TextInput`
    font-family: ${cmStyles.fontRegular};
    font-size: 16px;
    margin-left: 12px;
    color: #333333;
    flex: 1;
`
export const InputTextMask = styled(TextInputMask)`
    font-family: ${cmStyles.fontRegular};
    font-size: 16px;
    margin-left: 12px;
    color: #333333;
    flex: 1;
`