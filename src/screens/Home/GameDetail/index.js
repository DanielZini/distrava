import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import BackButton from '../../../components/BackButton';
import { AirbnbRating } from 'react-native-ratings';
import {
    Container,
    FullCard,
    WrapImage,
    GameImage,
    WrapPlatform,
    PlatformImage,
    Content,
    WrapTitle,
    Title,
    WrapAddress,
    Address,
    WrapRating,
    ItemRating,
    Label,
} from './styles';

class GameDetail extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            // title: navigation.getParam('title', 'Jogo'),
            headerStyle: {
                elevation: 0,
                shadowOpacity: 0,
                // height: 80,
                // backgroundColor: cmStyles.cl.second,
                // backgroundColor: 'rgba(' + cmStyles.cl.secondRGB + ', .8)',
            },
            headerTransparent: true,
            headerTintColor: '#FFFFFF',
            headerLeft: <BackButton marginL={15} marginT={34} onPress={() => navigation.goBack()} />
        };
    };

    render(){

        const { navigation } = this.props;

        let title = navigation.getParam('title');
        let address = navigation.getParam('address');
        let photo = navigation.getParam('photo');
        let platform = navigation.getParam('platform');
        let ratingBox = navigation.getParam('ratingBox');
        let ratingMedia = navigation.getParam('ratingMedia');
        let ratingManual = navigation.getParam('ratingManual');
        let myGame = navigation.getParam('myGame');

        return(
            <Container>
                <FullCard>
                    <WrapImage>
                        <GameImage source={{ uri: photo}} />
                    </WrapImage>

                    <WrapPlatform>
                        <PlatformImage source={{ uri: platform }} />
                    </WrapPlatform>

                    <Content>

                        <WrapTitle>
                            <Title>{title}</Title>

                            {!myGame &&
                            <WrapAddress>
                                <Icon name='map-marker' size={15} color='#333' /><Address>{address}</Address>
                            </WrapAddress>
                            }
                        </WrapTitle>

                        <WrapRating>
                            <ItemRating>
                                <Label>Caixa</Label>
                                <AirbnbRating
                                    isDisabled={true}
                                    type='star'
                                    count={5}
                                    defaultRating={ratingBox}
                                    size={17}
                                    showRating={false}
                                />
                            </ItemRating>
                            <ItemRating>
                                <Label>Mídia</Label>
                                <AirbnbRating
                                    isDisabled={true}
                                    type='star'
                                    count={5}
                                    defaultRating={ratingMedia}
                                    size={17}
                                    showRating={false}
                                />
                            </ItemRating>
                            <ItemRating>
                                <Label>Manual</Label>
                                <AirbnbRating
                                    isDisabled={true}
                                    type='star'
                                    count={5}
                                    defaultRating={ratingManual}
                                    size={17}
                                    showRating={false}
                                />
                            </ItemRating>
                        </WrapRating>
                    </Content>

                </FullCard>
            </Container>
        )
    }
}

export default GameDetail;