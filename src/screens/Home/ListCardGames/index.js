import React from 'react';
import { Animated, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import cmStyles from '../../../commonStyles';
import Card from '../../../components/Card';
import CustomModal from '../../../components/CustomModal';
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
    TextInfo,
    AnimatedView,
    WrapLoadingBg,
    BgLoading,
    TitleModalMatch,
    WrapGames,
    Game,
    WrapIcon,
    IconExchange,
    ButtonReload
} from './styles';

const defaultStateListGames = [
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

const defaultStateMatch = [
    {
        ownerGamePhoto: '',
        wantedGamePhoto: ''
    },
]

class Main extends React.Component {

    state = {
        buttonDisable: true,
        listGame: defaultStateListGames,
        matchGames: defaultStateMatch,
        modalVisible: false,
        listMyGames: defaultStateListGames
    }

    componentDidMount(){
        this._subscribe = this.props.navigation.addListener('didFocus', () => {
            this.loadGames();
        });
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
        this.setState({ listGames: defaultStateListGames })
        
        try {
            const res           = await axios.get(`${server}/list-main-cards-games`);
            const resMyGames    =  await axios.get(`${server}/list-users-games`);

            this.setState({ listGames: res.data, listMyGames: resMyGames.data })

            // adiciona indice de animação á cada jogo da lista -----------
            const newListGames = res.data.map(game => {
                game.animatedMove = new Animated.ValueXY({ x: 0, y: 0 });
                // game.animatedOpacity = new Animated.Value(1);
                return game
            })
    
            this.setState({ listGame: newListGames, buttonDisable: false } )        
        } catch (err) {
            showError(err);
        }

    }

    addGame = async () =>{

        const [game, ...rest] = this.state.listGame;
        this.setState({ buttonDisable: true })

        Animated.timing(this.state.listGame[0].animatedMove, {
            toValue: { x: 0, y: 500 },
            duration: 400
        }).start(async () =>{

            try {

                const res = await axios.post(`${server}/wanted-game`, {
                    idUserGameOwner: game.user_id,
                    gameId: game.id
                });

                // ITS A MATCCCHHHHHH
                if (res.data) {
                    await this.setState({
                        matchGames: {
                            ownerGamePhoto: res.data[0].ownerGamePhoto,
                            wantedGamePhoto: res.data[0].wantedGamePhoto,
                        },
                        modalVisible: true
                    })
                }

            } catch (err) {
                this.setState({ modalVisible: true })
            }

            this.setState({ listGame: rest ? rest : defaultStateListGames, buttonDisable: false });

            if (rest.length < 2) {
                this.loadGames();
            }
            
        })

    }

    nextGame = () =>{

        const [game, ...rest] = this.state.listGame;
        this.setState({ buttonDisable: true })

        Animated.timing(this.state.listGame[0].animatedMove, {
            toValue: { x: 500, y: 0 },
            duration: 400
        }).start(async () => {

            try {

                await axios.post(`${server}/rejected-game`, {
                    gameId: game.id
                });   

            } catch (err) {
                console.log(err);
            }

            this.setState({ listGame: rest ? rest : defaultStateListGames, buttonDisable: false });

            if (rest.length < 2) {
                this.loadGames();
            }

        });
    }

    navChanges = () => {
        this.setState({ modalVisible: false });
        this.props.navigation.navigate('Match');
    }
    render(){
        return(
            <Container>

                <CustomModal
                    modalVisible={this.state.modalVisible}
                    closeModal={() => this.setState({ modalVisible: false })}>
                    <TitleModalMatch>Deu Troca!</TitleModalMatch>

                    <WrapGames>
                        <Game source={{ uri: this.state.matchGames.ownerGamePhoto }} />
                        <WrapIcon>
                            <IconExchange name='swap-horiz' />
                        </WrapIcon>
                        <Game source={{ uri: this.state.matchGames.wantedGamePhoto }} />
                    </WrapGames>
                    <Button onPress={() => this.navChanges()}>Ir para trocas</Button>
                </CustomModal>

                <Content>

                {
                this.state.listGame.length > 0 ? // verifica se há jogos para trocar 
                    
                    this.state.listMyGames.length > 0 ? // verifica se usuário possui jogos cadastrado

                    <View style={{ width: '100%', height: '100%' }}>
                        <WrapLoadingBg>
                            <BgLoading source={loafingGif} />
                        </WrapLoadingBg>
                        {this.state.listGame.map((game, index) => (
                            <AnimatedView
                                key={game.id}
                                style={{
                                    top: game.animatedMove && game.animatedMove.y,
                                    right: game.animatedMove && game.animatedMove.x,
                                    zIndex: this.state.listGame.length - index
                                }}>
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

                    :

                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                        <EmptyAlert>Olá, parece que você não cadastrou nenhum jogo ainda!</EmptyAlert>
                        <TextInfo>Para começar a trocar, cadastre algum jogo.</TextInfo>

                        <Button
                            custom={true}
                            onPress={() => this.props.navigation.navigate('NewGame')}>
                            <Icon name='gamepad' color='#FFF' size={35} />
                            <TextButton fontSize={17}>Cadastrar jogos</TextButton>
                        </Button>
                    </View>

                :

                <View style={{ justifyContent: "center", alignItems: "center" }}>
                    <EmptyAlert>Não há mais jogos para trocar! =[</EmptyAlert>

                    <ButtonReload>
                        <TouchableOpacity onPress={() => this.loadGames()}>
                            <SimpleLineIcons name="reload" size={30} color="#FFFFFF" />
                        </TouchableOpacity>
                    </ButtonReload>
                </View>

                    
                }
                </Content>

                {this.state.listGame.length > 0 &&
                    this.state.listMyGames.length > 0 && (

                    <Footer>
                        <WrapButton>
                            <Button
                                disabled={this.state.buttonDisable}
                                custom={true}
                                btColor={cmStyles.cl.second}
                                onPress={() => this.nextGame()}>
                                <TextButton>Próximo</TextButton>
                                <Icon name='trending-flat' color='#FFF' size={35} />
                            </Button>
                        </WrapButton>
                        <WrapButton>
                            <Button
                                disabled={this.state.buttonDisable}
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