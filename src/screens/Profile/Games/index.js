import React from 'react';
import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ScrollView } from 'react-native-gesture-handler';
import CardMini from '../../../components/CardMini';
import { 
    Container,
    ItemGame,
    TouchArea,
} from './styles';

class Games extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Meus Jogos',
            headerRight: <Icon name='gamepad' size={30} color='#FFFFFF' style={{marginRight: 15}} />,
        };
    };

    render(){

        const { navigation } = this.props;

        const navGameDetail = (name, photo, platform, ratingBox, ratingMedia, ratingManual, owner) => {
            navigation.navigate('GameDetail', {
                title: name,
                photo,
                platform,
                ratingBox,
                ratingMedia,
                ratingManual,
                owner,
            });
        }
        const excludeGame = (id) => {
            Alert.alert(
                'Alerta!',
                'Deseja excluir esse jogo? Essa ação é irreversível',
                [
                    {
                        text: 'Cancelar',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                    },
                    { text: 'Excluir', onPress: () => console.log('OK Pressed') },
                ],
                { cancelable: false },
            );
        }

        // config car game --------
        let gameName = 'The Legend of Zelda: Ocarina of Time 3D'

        let gameImageId = 'co1nl5';
        const gameUri = 'https://images.igdb.com/igdb/image/upload/t_cover_big_2x/' + gameImageId + '.jpg';

        let platformImageId = 'pl6o';
        const platformUri = 'https://images.igdb.com/igdb/image/upload/t_cover_big/' + platformImageId + '.png';

        return(
            <ScrollView style={{ flex: 1, backgroundColor: '#f5f5f5'}}>
                <Container>

                    <ItemGame>
                        <TouchArea onPress={navigation.navigate('NewGame')}>
                            <Icon name='add-circle-outline' size={60} color='#AAAAAA' />
                        </TouchArea>
                    </ItemGame>
                    
                    <CardMini
                        newGame={false}
                        onExclude={() => excludeGame(1)}
                        onOpen={() => navGameDetail(gameName, gameUri, platformUri, 5, 4, 1)}
                        imgPlatform={platformUri}
                        imgGame={gameUri} />
                        
                    <CardMini
                        newGame={false}
                        onExclude={() => excludeGame(1)}
                        onOpen={() => navGameDetail('The Legend of Zelda: Breath of the Wild', 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1p98.png', 'https://images.igdb.com/igdb/image/upload/t_cover_big/pl6n.png', 5, 4, 1)}
                        imgPlatform={'https://images.igdb.com/igdb/image/upload/t_cover_big/pl6n.png'}
                        imgGame={'https://images.igdb.com/igdb/image/upload/t_cover_big/co1p98.png'} />
                    
                    <CardMini
                        newGame={false}
                        onExclude={() => excludeGame(1)}
                        onOpen={() => navGameDetail(gameName, gameUri, platformUri, 5, 4, 1)}
                        imgPlatform={platformUri}
                        imgGame={gameUri} />
                        
                    <CardMini
                        newGame={false}
                        onExclude={() => excludeGame(1)}
                        onOpen={() => navGameDetail('The Legend of Zelda: Breath of the Wild', 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1p98.png', 'https://images.igdb.com/igdb/image/upload/t_cover_big/pl6n.png', 5, 4, 1)}
                        imgPlatform={'https://images.igdb.com/igdb/image/upload/t_cover_big/pl6n.png'}
                        imgGame={'https://images.igdb.com/igdb/image/upload/t_cover_big/co1p98.png'} />

                </Container>
            </ScrollView>
        )
    }
}

export default Games;