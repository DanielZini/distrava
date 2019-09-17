import React from 'react';
import { 
    Container,
 } from './styles';
import Tab from './Tab';

export default props => {

    const { navigation } = props;
    const routes = navigation.state.routes;

    return (
        <Container>
            {routes.map((route, index) => {
                return (
                    <Tab
                        key={route.key}
                        routeName={route.routeName}
                        onPress={() => navigation.navigate(route.routeName)}
                        focused={navigation.state.index === index}
                        index={index}
                    />
                );
            })}
        </Container>
        // <Container>
        //     <ItemGrid>
        //         <ButtonMenu active={props.profile ? props.profile : false}>
        //             <TouchableOpacity onPress={(props.openProfile)}>
        //                 <Icon name='person' size={35} color={props.profile ? "#FFFFFF" : "#999999"} />
        //             </TouchableOpacity>
        //         </ButtonMenu>
        //     </ItemGrid>
        //     <ItemGrid>
        //         <ButtonMenu symbol={true} active={props.home ? props.home : false}>
        //             <TouchableOpacity onPress={props.openMain}>
        //                 <SymbolLogo source={props.home ? symbol : symbolD } />
        //             </TouchableOpacity>
        //         </ButtonMenu>
        //     </ItemGrid>
        //     <ItemGrid>
        //         <ButtonMenu active={props.chat ? props.chat : false}>
        //             <TouchableOpacity>
        //                 <Icon name='chat' size={30} color='#999' />
        //             </TouchableOpacity>
        //         </ButtonMenu>
        //     </ItemGrid>
        // </Container>
    )
}