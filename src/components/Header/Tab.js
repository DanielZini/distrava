import React from "react"
import Icon from 'react-native-vector-icons/MaterialIcons';
import symbol from '../../../assets/img/symbolDistrava_n.png';
import symbolD from '../../../assets/img/symbolDistrava_n2.png';
import { TouchableOpacity } from "react-native"
import {
    ItemGrid,
    ButtonMenu,
    SymbolLogo
} from './styles';

const Tab = ({ focused, onPress, routeName }) => {

    let icon = null;
    let mainSymbol = null;

    switch (routeName) {
        case 'Profile':
            icon = <Icon name='person' size={30} color={focused ? "#FFFFFF" : "#999999"} />;
            mainSymbol = false;
            break;

        case 'Main':
            icon =  <SymbolLogo source={focused ? symbol : symbolD} />;
            mainSymbol = true;
            break;

        case 'Match':
            icon = <Icon name='chat' size={30} color={focused ? "#FFFFFF" : "#999999"} />;
            mainSymbol = false;
            break;
    } 

    return (
        <ItemGrid>
            <ButtonMenu symbol={mainSymbol} active={focused}>
                <TouchableOpacity onPress={(onPress)}>
                    {icon}
                </TouchableOpacity>
            </ButtonMenu>
        </ItemGrid>
    )
}

export default Tab