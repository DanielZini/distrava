import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import BackButton from '../../../components/BackButton';
import cmStyles from '../../../commonStyles';
import { AirbnbRating } from 'react-native-ratings';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
    Container,
    FullCard,
    WrapImage,
    GameImage,
    WrapPlatform,
    PlatformImage,
    Content,
    GameTitle,
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
        let photo = navigation.getParam('photo');
        let platform = navigation.getParam('platform');
        let ratingBox = navigation.getParam('ratingBox');
        let ratingMedia = navigation.getParam('ratingMedia');
        let ratingManual = navigation.getParam('ratingManual');

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
                        {/* start={{ x: 0, y: 1 }}
                        end={{ x: 0, y: 0 }}
                        colors={['rgba(0,0,0,.9)', 'rgba(0,0,0,.0)']}> */}

                        <GameTitle>{title}</GameTitle>

                        <WrapRating>
                            <ItemRating>
                                <Label>Caixa</Label>
                                <AirbnbRating
                                    isDisabled={true}
                                    type='star'
                                    count={5}
                                    defaultRating={ratingBox}
                                    size={14}
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
                                    size={14}
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
                                    size={14}
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