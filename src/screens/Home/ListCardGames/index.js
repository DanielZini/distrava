import React from 'react';
import { Animated, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import cmStyles from '../../../commonStyles';
import Card from '../../../components/Card';
import loafingGif from '../../../../assets/img/loading.gif';
import Button from '../../../components/Button';
import { server } from '../../../common';
import axios from 'axios';
import {
    Container,
    Content,
    Footer,
    WrapButton,
    TextButton,
    EmptyAlert,
    AnimatedView,
    WrapLoadingBg,
    BgLoading,
} from './styles';

const defaultState = [
    {
        id: 1,
        address: '',
        gameName: '',
        gameUri: '',
        platformUri: '',
        ratingBox: '',
        ratingMedia: '',
        ratingManual: '',
        city: '',
        state: ''
    },
]

class Main extends React.Component {

    state = {
        listGame: defaultState,
        buttonDisabled: true,
    }

    componentDidMount(){
        this.loadGames();
        this.setState({ buttonDisabled: false })
    }

    navigationScreen = (name, photo, address, platform, ratingBox, ratingMedia, ratingManual) => {
        this.props.navigation.navigate('GameDetail', {
            title: name,
            photo,
            address,
            platform,
            ratingBox,
            ratingMedia,
            ratingManual,
        });
    }

    loadGames = async () =>{

        try {
            const res = await axios.get(`${server}/list-main-cards-games`);

            this.setState({ listGames: res.data })

            // adiciona indice de animação á cada jogo da lista -----------
            const newListGames = res.data.map(game => {
                game.animatedMove = new Animated.ValueXY({ x: 0, y: 0 });
                // game.animatedOpacity = new Animated.Value(1);
                return game
            })
    
            this.setState({ listGame: newListGames } )        
        } catch (err) {
            showError(err);
        }

    }

    addGame = () =>{

        Animated.spring(this.state.listGame[0].animatedMove, {
            toValue: { x: 0, y: 500 },
            speed: 3,
        }).start(async () =>{

            // faz as paradas
            const [game, ...rest] = this.state.listGame;

            try {

                await axios.post(`${server}/wanted-game`, {
                    idUserGameOwner: game.user_id,
                    gameId: game.id
                });

            } catch (err) {
                console.log(err);
            }

            this.setState({ listGame: rest ? rest : defaultState });

            if (rest.length < 2){
                this.loadGames();   
            }
            
        });
    }

    nextGame = () =>{

        Animated.spring(this.state.listGame[0].animatedMove, {
            toValue: { x: 500, y: 0 },
            speed: 3,
        }).start(async () => {
            // faz as paradas
            const [game, ...rest] = this.state.listGame;

            try {

                await axios.post(`${server}/rejected-game`, {
                    gameId: game.id
                });

            } catch (err) {
                console.log(err);
            }

            this.setState({ listGame: rest ? rest : defaultState });

            if (rest.length < 2) {
                this.loadGames();
            }

        });
    }

    render(){
        return(
            <Container>
                <Content>

                {
                    this.state.listGame.length === 0 ?
                    
                    <EmptyAlert>Não há mais jogos para trocar! =[</EmptyAlert>

                    :
                    
                    <View style={{width: '100%', height: '100%'}}>
                        <WrapLoadingBg>
                            <BgLoading source={loafingGif} />
                        </WrapLoadingBg>
                        {this.state.listGame.map((game, index) => (
                            <AnimatedView
                                key={game.id}
                                style={[game.animatedMove && game.animatedMove.getLayout(), { zIndex: this.state.listGame.length - index }]}>
                                <Card
                                    id={game.id}
                                    address={game.city + '/' + game.state}
                                    gameSrc={game.photo}
                                    platformSrc={game.platform}
                                    title={game.name}
                                    userId={game.user_id}
                                    onPress={() => this.navigationScreen(
                                        game.name, game.photo, game.city + '/' + game.state, game.platform, game.rating_box, game.rating_media, game.rating_manual
                                    )} />
                            </AnimatedView>
                        ))}
                    </View>
                }
                </Content>

                {this.state.listGame.length > 0 && (

                    <Footer>
                        <WrapButton>
                            <Button
                                disabled={this.state.buttonDisabled}
                                custom={true}
                                btColor={cmStyles.cl.second}
                                onPress={() => this.nextGame()}>
                                <TextButton>Próximo</TextButton>
                                <Icon name='trending-flat' color='#FFF' size={35} />
                            </Button>
                        </WrapButton>
                        <WrapButton>
                            <Button
                                disabled={this.state.buttonDisabled}
                                custom={true}
                                onPress={() => this.addGame()}>
                                <Icon name='swap-horiz' color='#FFF' size={35} />
                                <TextButton>Quero</TextButton>
                            </Button>
                        </WrapButton>
                    </Footer>
                )}

            </Container>
        )
    }
}

export default Main;