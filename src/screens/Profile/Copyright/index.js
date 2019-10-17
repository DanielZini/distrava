import React from 'react';
import { View, TouchableOpacity, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import logo from '../../../../assets/img/distrava.png';
import { ScrollView } from 'react-native-gesture-handler';
import { 
    Container,
    Content,
    Logo,
    TextAbout,
    Bold,
    SocialLink,
} from './styles';

class Copyright extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Sobre o aplicativo',
            headerRight: <Icon name='copyright' size={30} color='#FFFFFF' style={{ marginRight: 15 }} />,
        };
    };

    render(){
        return(
            <Container>
                <Content>
                    <Logo source={logo} />
                    <TextAbout>
                        Este aplicativo é gratuito e foi desenvolvido com o objetivo de incentivar o consumo colaborativo de jogos de video game.
                    </TextAbout>

                    <TextAbout>
                        Desenvolvido por: <Bold>Daniel Zini da Silva</Bold>.
                    </TextAbout>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ marginHorizontal: 5}}>
                            <TouchableOpacity onPress={() => Linking.openURL('https://github.com/DanielZini')}>
                                <SocialLink>
                                    <Icon name='github' size={30} color='#FFFFFF' />
                                </SocialLink>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginHorizontal: 5}}>
                            <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/daniel-zini-11620aa5/')}>
                                <SocialLink>
                                    <Icon name='linkedin' size={30} color='#FFFFFF' />
                                </SocialLink>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginHorizontal: 5}}>
                            <TouchableOpacity onPress={() => Linking.openURL('mailto:daniel.zini@hotmail.com')}>
                                <SocialLink>
                                    <Icon name='envelope-o' size={30} color='#FFFFFF' />
                                </SocialLink>
                            </TouchableOpacity>
                        </View>
                    </View>

                </Content>
            </Container>
        )
    }
}

export default Copyright;