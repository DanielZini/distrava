import React from 'react';
import { Animated } from 'react-native';
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
    EmptyAlert,
    AnimatedView,
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
    {
        id: 5,
        gameName: 'The Legend of Zelda: Ocarina of Time 3D',
        gameUri: gameUri,
        platformUri: platformUri,
        ratingBox: 5,
        ratingMedia: 5,
        ratingManual: 5,
    },
    {
        id: 6,
        gameName: 'The Legend of Zelda: Ocarina of Time 3D',
        gameUri: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1p98.jpg',
        platformUri: platformUri,
        ratingBox: 5,
        ratingMedia: 5,
        ratingManual: 5,
    },
    {
        id: 7,
        gameName: 'The Legend of Zelda: Ocarina of Time 3D',
        gameUri: gameUri,
        platformUri: platformUri,
        ratingBox: 5,
        ratingMedia: 5,
        ratingManual: 5,
    },
    {
        id: 8,
        gameName: 'The Legend of Zelda: Ocarina of Time 3D',
        gameUri: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1p98.jpg',
        platformUri: platformUri,
        ratingBox: 5,
        ratingMedia: 5,
        ratingManual: 5,
    },
]
class Main extends React.Component {

    state = {
        listGame: [],
    }

    componentDidMount(){
        this.loadGames();
        // this.moveAnimation = new Animated.ValueXY({ x: 0, y: 0 })
        // this.fadeAnimation = new Animated.Value(1)
    }

    navigationScreen = (name, photo, platform, ratingBox, ratingMedia, ratingManual) => {
        this.props.navigation.navigate('GameDetail', {
            title: name,
            photo,
            platform,
            ratingBox,
            ratingMedia,
            ratingManual,
        });
    }

    // animationAddGame =  () => {
    //     Animated.parallel([
    //         Animated.timing(this.fadeAnimation, {
    //             toValue: 0,
    //             duration: 300
    //         }),
    //         Animated.spring(this.moveAnimation, {
    //             toValue: { x: 200, y: 200 },
    //             duration: 1000
    //         }),
    //     ]).start();
    // }

    // animationNextGame = async  () => {
    //     await Animated.parallel([
    //         await Animated.timing(this.fadeAnimation, {
    //             toValue: 0,
    //             duration: 300
    //         }),
    //         await Animated.spring(this.moveAnimation, {
    //             toValue: { x: 200, y: -200 },
    //             duration: 1000
    //         }),
    //     ]).start();
    // }

    loadGames = () =>{

        // adiciona indice de animação á cada jogo da lista -----------
        const newListMocGames = mocListGame.map(game => {
            game.animatedMove = new Animated.ValueXY({ x: 0, y: 0 });
            game.animatedOpacity = new Animated.Value(1);
            return game
        })

        this.setState({ listGame: newListMocGames } )        
    }

    addGame = () =>{

        Animated.parallel([
            Animated.spring(this.state.listGame[0].animatedMove, {
                toValue: { x: 500, y: 0 },
                duration: 1000
            }),
            Animated.timing(this.state.listGame[0].animatedOpacity, {
                toValue: 0,
                duration: 500
            }),
        ]).start(() =>{

            // faz as paradas
            const [game, ...rest] = this.state.listGame;
            this.setState({ listGame: rest });
        });
    }

    nextGame = () =>{
        Animated.parallel([
            Animated.spring(this.state.listGame[0].animatedMove, {
                toValue: { x: -500, y: 0 },
                duration: 1000
            }),
            Animated.timing(this.state.listGame[0].animatedOpacity, {
                toValue: 0,
                duration: 500
            }),
        ]).start(() => {
            // faz as paradas
            const [game, ...rest] = this.state.listGame;

            this.setState({ listGame: rest });
        });
    }

    render(){
        return(
            <Container>
                <Content>

                {
                    this.state.listGame.length === 0 ?
                    
                    <EmptyAlert>Não há mais jogos para trocar =[</EmptyAlert>

                    :
                    this.state.listGame.map((game, index) => (
                        <AnimatedView
                            key={game.id}
                            style={[game.animatedMove.getLayout(), { opacity: game.animatedOpacity, zIndex: this.state.listGame.length - index }]}>
                            {/* style={[this.moveAnimation.getLayout(), { opacity: game.animationOpacity, zIndex: this.state.listGame.length - index }]}> */}
                            <Card
                                id={game.id}
                                gameSrc={game.gameUri}
                                platformSrc={game.platformUri}
                                title={game.gameName}
                                onPress={() => this.navigationScreen(
                                    game.gameName, game.gameUri, game.platformUri, game.ratingBox, game.ratingMedia, game.ratingManual
                                )} />
                        </AnimatedView>
                    ))
                }
                    
                    {/* <Card
                        gameSrc={gameUri}
                        platformSrc={platformUri}
                        title={gameName}
                        order={1}
                        onPress={() => this.navigationScreen(gameName, gameUri, platformUri, 5, 4, 1)} /> */}
                </Content>

                {this.state.listGame.length > 0 && (

                    <Footer>
                        <WrapButton>
                            <Button
                                custom={true}
                                btColor={cmStyles.cl.second}
                                onPress={() => this.nextGame()}>
                                <TextButton>Próximo</TextButton>
                                <Icon name='trending-flat' color='#FFF' size={35} />
                            </Button>
                        </WrapButton>
                        <WrapButton>
                            <Button
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