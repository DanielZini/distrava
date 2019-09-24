import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import cmStyles from '../../../commonStyles';
import Card from '../../../components/Card';
import Button from '../../../components/Button';
import {
    Container,
    Content,
    Footer,
    WrapButton,
    TextButton,
} from './styles';

const Main = ({ navigation }) =>  {

    const navigationScreen = (name, photo, platform, ratingBox, ratingMedia, ratingManual) => {
        navigation.navigate('GameDetail', {
            title: name,
            photo,
            platform,
            ratingBox,
            ratingMedia,
            ratingManual,
        });
    }

    // config car game --------
    let gameName = 'The Legend of Zelda: Ocarina of Time 3D'

    let gameImageId = 'co1nl5';
    const gameUri = 'https://images.igdb.com/igdb/image/upload/t_cover_big_2x/' + gameImageId + '.jpg';

    let platformImageId = 'pl6o';
    const platformUri = 'https://images.igdb.com/igdb/image/upload/t_cover_big/' + platformImageId + '.png';

    return(
        <Container>
            <Content>
                <Card
                    gameSrc={gameUri}
                    platformSrc={platformUri}
                    title={gameName}
                    order={1}
                    onPress={navigationScreen(gameName, gameUri, platformUri, 5, 4, 1)} />
            </Content>
            <Footer>
                <WrapButton>
                    <Button
                        custom={true}
                        btColor={cmStyles.cl.second}>
                        <TextButton>Próximo</TextButton>
                        <Icon name='trending-flat' color='#FFF' size={35} />
                    </Button>
                </WrapButton>
                <WrapButton>
                    <Button
                        custom={true}>
                        <Icon name='swap-horiz' color='#FFF' size={35} />
                        <TextButton>Quero</TextButton>
                    </Button>
                </WrapButton>
            </Footer>
        </Container>
    )
}

export default Main;