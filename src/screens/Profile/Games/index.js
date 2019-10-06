import React from 'react';
import { View, Alert, FlatList, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ScrollView } from 'react-native-gesture-handler';
import CardMini from '../../../components/CardMini';
import { 
    Container,
    ItemGame,
    TouchArea,
} from './styles';

// config car game --------
let gameName = 'The Legend of Zelda: Ocarina of Time 3D'

let gameImageId = 'co1nl5';
const gameUri = 'https://images.igdb.com/igdb/image/upload/t_cover_big_2x/' + gameImageId + '.jpg';

let platformImageId = 'pl6o';
const platformUri = 'https://images.igdb.com/igdb/image/upload/t_cover_big/' + platformImageId + '.png';

const mocListGame = [
    {
        id: 1,
        gameName: 'The Legend of Zelda: Ocarina of Time 3D',
        gameUri: gameUri,
        platformUri: platformUri,
        ratingBox: 5,
        ratingMedia: 5,
        ratingManual: 5,
    },
    {
        id: 2,
        gameName: 'The Legend of Zelda: Ocarina of Time 3D',
        gameUri: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1p98.jpg',
        platformUri: platformUri,
        ratingBox: 5,
        ratingMedia: 5,
        ratingManual: 5,
    },
    {
        id: 3,
        gameName: 'The Legend of Zelda: Ocarina of Time 3D',
        gameUri: gameUri,
        platformUri: platformUri,
        ratingBox: 5,
        ratingMedia: 5,
        ratingManual: 5,
    },
    {
        id: 4,
        gameName: 'The Legend of Zelda: Ocarina of Time 3D',
        gameUri: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1p98.jpg',
        platformUri: platformUri,
        ratingBox: 5,
        ratingMedia: 5,
        ratingManual: 5,
    },
]

class Games extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Meus Jogos',
            headerRight: <Icon name='gamepad' size={30} color='#FFFFFF' style={{marginRight: 15}} />,
            onGoBack: () => this.refresh(),
        };
    };

    state = {
        listGames: [],
    }

    componentDidMount() {
        this.loadListGames();
    }

    loadListGames = () => {

        this.setState({ listGames: mocListGame })
    }

    navGameDetail = (name, photo, platform, ratingBox, ratingMedia, ratingManual, owner) => {
        this.props.navigation.navigate('GameDetail', {
            title: name,
            photo,
            platform,
            ratingBox,
            ratingMedia,
            ratingManual,
            owner,
        });
    }
    excludeGame = (id) => {
        Alert.alert(
            'Alerta!',
            'Deseja excluir esse jogo? Essa ação é irreversível',
            [
                {
                    text: 'Cancelar',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                { 
                    text: 'Excluir', onPress: () => {
                        console.log('excluir');
                    }
                },
            ],
            { cancelable: false },
        );
    }

    render(){

        const { navigation } = this.props;

        return(
            <ScrollView style={{ flex: 1, backgroundColor: '#f5f5f5'}}>
                <Container>

                    <ItemGame>
                        <TouchArea onPress={navigation.navigate('NewGame')}>
                            <Icon name='add-circle-outline' size={60} color='#AAAAAA' />
                        </TouchArea>
                    </ItemGame>

                    {
                        this.state.listGames.map((game, index) => (
                            <CardMini
                                key={game.id}
                                newGame={false}
                                onExclude={() => this.excludeGame(1)}
                                onOpen={() =>this.navGameDetail(game.gameName, game.gameUri, game.platformUri, game.ratingBox, game.ratingMedia, game.ratingManual)}
                                imgPlatform={game.platformUri}
                                imgGame={game.gameUri} />
                        ))
                    }
                    
                   
                    {/* <CardMini
                        newGame={false}
                        onExclude={() => excludeGame(1)}
                        onOpen={() => navGameDetail(gameName, gameUri, platformUri, 5, 4, 1)}
                        imgPlatform={platformUri}
                        imgGame={gameUri} /> */}
                    

                </Container>
            </ScrollView>
        )
    }
}

export default Games;