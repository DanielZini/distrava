import React from 'react';
import { View } from 'react-native';
import boxIcon from '../../../../assets/img/box.png';
import cmStyles from '../../../commonStyles';
import { ScrollView } from 'react-native-gesture-handler';
import { Rating, AirbnbRating } from 'react-native-ratings';
import {
    Container,
    WrapImage,
    GameImage,
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
                // backgroundColor: 'rgba(0, 0, 0, .8)',
                // backgroundColor: 'rgba(' + cmStyles.cl.secondRGB + ', .8)',
            },
            headerTransparent: true,
            headerTintColor: '#FFFFFF',
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
            <ScrollView>
                <Container>
                    <WrapImage>
                        <GameImage source={{ uri: photo}} />
                    </WrapImage>
                    <Content>
                        <GameTitle>{title}</GameTitle>
                        <WrapRating>
                            <ItemRating noBg={true}>
                                <GameImage source={{ uri: platform }} />
                            </ItemRating>
                            <ItemRating>
                                <Label>Caixa</Label>
                                <AirbnbRating
                                    isDisabled={true}
                                    type='star'
                                    count={5}
                                    defaultRating={ratingBox}
                                    size={20}
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
                                    size={20}
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
                                    size={20}
                                    showRating={false}
                                />
                            </ItemRating>
                        </WrapRating>
                    </Content>
                </Container>
            </ScrollView>
        )
    }
}

export default GameDetail;