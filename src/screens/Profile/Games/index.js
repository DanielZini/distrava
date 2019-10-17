import React from 'react';
import { View, Alert, FlatList, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ScrollView } from 'react-native-gesture-handler';
import CardMini from '../../../components/CardMini';
import axios from 'axios';
import { server } from '../../../common';
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
            onGoBack: () => this.refresh(),
        };
    };

    state = {
        listGames: [],
    }

    componentDidMount() {
        this._subscribe = this.props.navigation.addListener('didFocus', () => {
            this.loadListGames();
        });
    }

    loadListGames = async () => {

        try {
            const res = await axios.get(`${server}/list-users-games`);
            
            this.setState({ listGames: res.data })

        } catch (err) {
            showError(err);
        }

    }

    navGameDetail = (title, photo, platform, ratingBox, ratingMedia, ratingManual, myGame) => {
        this.props.navigation.navigate('GameDetail', {
            title,
            photo,
            platform,
            ratingBox,
            ratingMedia,
            ratingManual,
            myGame
        });
    }
    excludeGame = async (id) => {
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
                    text: 'Excluir', onPress: async () => {

                        try{
                            await axios.delete(`${server}/delete-game/${id}`);
                            Alert.alert('Alerta', 'Esse jogo foi excluído!');
                            this.loadListGames();
                        } catch(err) {
                            showError(err);
                        }

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
                        <TouchArea onPress={() => navigation.navigate('NewGame')}>
                            <Icon name='add-circle-outline' size={60} color='#AAAAAA' />
                        </TouchArea>
                    </ItemGame>

                    { 
                        this.state.listGames.length > 0 &&

                            this.state.listGames.map((game, index) => (
                                <CardMini
                                    key={game.id}
                                    newGame={false}
                                    onExclude={() => this.excludeGame(game.id)}
                                    imgPlatform={game.platform}
                                    imgGame={game.photo}
                                    status={game.status}
                                    onOpen={() =>this.navGameDetail(game.name, game.photo, game.platform, game.rating_box, game.rating_media, game.rating_manual, myGame = true)} />
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