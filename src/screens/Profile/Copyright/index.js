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
                <ScrollView>
                    <Content>
                        <Logo source={logo} />
                        <TextAbout>
                            Este aplicativo é gratuito e foi desenvolvido com o objetivo de incentivar o consumo colaborativo de jogos de video game.
                        </TextAbout>
                        <TextAbout>
                            A ideia de um aplicativo que facilite a permuta de jogos eletrônicos (em mídia física) partiu da premissa de tornar esse lazer viável para um maior número de pessoas. Uma plataforma colaborativa que ajudará pessoas com mesmos interesses a se comunicarem e promoverem trocas entre si, diminuindo o consumo excessivo de produtos que podem ser reaproveitados. 
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
                </ScrollView>
            </Container>
        )
    }
}

export default Copyright;