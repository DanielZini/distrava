import cmStyles from '../../commonStyles';
import styled from 'styled-components';

export const Container = styled.View`
    width: 60px;
    height: 50px;
    justify-content: center;
    align-items: center;
    background-color: ${cmStyles.cl.primary};
    border-radius: 6px;
    position: relative;
    overflow:hidden;
`