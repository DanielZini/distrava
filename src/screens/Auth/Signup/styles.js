import cmStyles from '../../../commonStyles';
import styled from 'styled-components';

export const Container = styled.View`
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
    max-width: 100%
`