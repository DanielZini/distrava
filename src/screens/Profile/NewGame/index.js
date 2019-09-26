import React from 'react';
import { Text, FlatList, Keyboard } from 'react-native';
import { ViewPager } from 'rn-viewpager'
import Button from '../../../components/Button';
import InputSearch from '../../../components/InputSearch';
import cmStyles from '../../../commonStyles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ScrollView } from 'react-native-gesture-handler';
import StepIndicator from 'react-native-step-indicator';
import CardMini from '../../../components/CardMini';
import { 
    Container,
    NavSteps,
    ItemStep,
    WrapActionButtons,
    ButtonItem,
    WrapSearchInput,
    ListCards,
    ListCards2,
    DescStep,
} from './styles';

// custom styles
const customStyles = {
    stepIndicatorSize: 50,
    currentStepIndicatorSize: 60,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: '#E04825',
    stepStrokeWidth: 3,
    separatorStrokeFinishedWidth: 4,
    stepStrokeFinishedColor: '#E04825',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#E04825',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#E04825',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    labelColor: '#555',
    currentStepLabelColor: '#E04825',
    labelSize: 16,
}

// config car game --------
let gameName = 'The Legend of Zelda: Ocarina of Time 3D'

let gameImageId = 'co1nl5';
const gameUri = 'https://images.igdb.com/igdb/image/upload/t_cover_big_2x/' + gameImageId + '.jpg';

let platformImageId = 'pl6o';
const platformUri = 'https://images.igdb.com/igdb/image/upload/t_cover_big/' + platformImageId + '.png';

//renderiza icones na navegação
const getStepIndicatorIconConfig = ({ position, stepStatus }) => {
    const iconConfig = {
        name: 'feed',
        color: stepStatus === 'finished' ? '#ffffff' : '#E04825',
        size: 30
    }
    switch (position) {
        case 0: {
            iconConfig.name = 'games'
            break
        }
        case 1: {
            iconConfig.name = 'videogame-asset'
            break
        }
        case 2: {
            iconConfig.name = 'star'
            break
        }
        default: {
            break
        }
    }
    return iconConfig
}

const mocGames = [
    {
        id: 1,
        active: false,
        gameUri: gameUri,
    },
    {
        id: 2,
        active: false,
        gameUri: gameUri,
    },
]

class NewGame extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Cadastrar novo jogo',
            headerRight: <Icon name='gamepad' size={30} color='#FFFFFF' style={{ marginRight: 15 }} />,
        };
    };

    state = {
        currentPage: 0,
        gamesList: [],
        selectedGame: [],
        platformList: [
            {
                id: 1,
                newGame: true,
                isPlatform: true,
                active: false,
                platformUri: platformUri
            },
            {
                id: 2,
                newGame: true,
                isPlatform: true,
                active: false,
                platformUri: platformUri
            },
            {
                id: 3,
                newGame: true,
                isPlatform: true,
                active: false,
                platformUri: platformUri
            },
        ],
    }

    // componentWillReceiveProps(nextProps, nextState) {
    //     if (nextState.currentPage != this.state.currentPage) {
    //         if (this.viewPager) {
    //             this.viewPager.setPage(nextState.currentPage)
    //         }
    //     }
    // }

    renderStepIndicator = params => (
        <Icon {...getStepIndicatorIconConfig(params)} />
    )

    onChangeStep = position => {
        this.setState({ currentPage: position });
        this.viewPager.setPage(position);
    }

    onSelect = (id) => {

        let selectedGame = [];

        const games = this.state.gamesList.map(game => {

            if (game.id === id) {
                game = { ...game };
                game.active = true;
                selectedGame = game;
            }else{
                game.active = false;
            }

            return game
        })

        this.setState({ gamesList: games, selectedGame });
    }

    searchGame = () => {
        Keyboard.dismiss();
        this.setState({ gamesList: mocGames });
    }

    render(){
        return(
            <Container>
                <NavSteps>
                    <StepIndicator
                        renderStepIndicator={this.renderStepIndicator}
                        customStyles={customStyles}
                        currentPosition={this.state.currentPage}
                        stepCount={3}
                        // onPress={this.onChangeStep}
                        labels={[
                            'Jogo',
                            'Plataforma',
                            'Avaliação',
                        ]}
                    />
                </NavSteps>
                <ViewPager
                    style={{ flexGrow: 1 }}
                    horizontalScroll={false}
                    ref={viewPager => {
                        this.viewPager = viewPager
                    }}
                    onPageSelected={page => {
                        this.setState({ currentPage: page.position })
                    }}>

                    <ItemStep key="0">
                        <WrapSearchInput>
                            <InputSearch placeholder='Busque seu jogo' onSearch={() => this.searchGame()} />
                        </WrapSearchInput>
                        <FlatList
                            columnWrapperStyle={{ justifyContent: 'space-between', paddingHorizontal: 15 }}
                            numColumns={2}
                            data={this.state.gamesList}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) =>
                                <CardMini {...item} newGame={true} onSelect={() => this.onSelect(item.id)} />}
                        />
                    </ItemStep>
                    {/* <ItemStep key="0">
                        <WrapSearchInput>
                            <InputSearch placeholder='Busque seu jogo'/>
                        </WrapSearchInput>
                        <ScrollView>
                            <ListCards>
                                <CardMini 
                                    newGame
                                    active={this.state.gameSelected}
                                    gameUri={gameUri}/>
                                <CardMini 
                                    newGame
                                    active={this.state.gameSelected}
                                    gameUri={gameUri}/>
                                <CardMini 
                                    newGame
                                    active={this.state.gameSelected}
                                    gameUri={gameUri}/>
                            </ListCards>
                        </ScrollView>
                    </ItemStep> */}

                    <ItemStep key="1">
                        <DescStep>Escolha a plataforma do seu jogo</DescStep>
                        <FlatList
                            columnWrapperStyle={{ justifyContent: 'space-between', paddingHorizontal: 15 }}
                            numColumns={2}
                            data={this.state.platformList}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) =>
                                <CardMini {...item} />}
                        />

                    </ItemStep>
                    {/* <ItemStep key="1">
                        <DescStep>Escolha a plataforma do seu jogo</DescStep>
                        <ScrollView>
                            <ListCards>
                                <CardMini
                                    newGame
                                    isPlatform
                                    active={this.state.platformSelected}
                                    platformUri={platformUri} />
                                    onSelect={() => this.onSelect()}
                            </ListCards>
                        </ScrollView>
                    </ItemStep> */}

                    <ItemStep key="2">
                        <ScrollView>
                            <Text>{this.state.currentPage}</Text>
                        </ScrollView>
                    </ItemStep>

                </ViewPager>
                <WrapActionButtons>
                    <ButtonItem>
                        <Button 
                        onPress={() => this.onChangeStep(this.state.currentPage - 1)}
                        btColor={cmStyles.cl.second} 
                        disabled={this.state.currentPage > 0 ? false : true} >
                            Voltar
                        </Button>
                    </ButtonItem>
                    <ButtonItem>
                        {this.state.currentPage < 2 ?
                        <Button
                            onPress={() => this.onChangeStep(this.state.currentPage + 1)}
                            disabled={this.state.selectedGame.length === 0 ? true : false}>
                            Próximo
                        </Button>
                        :
                         <Button>
                            Cadastrar
                        </Button>
                        }
                    </ButtonItem>
                </WrapActionButtons>
            </Container>
        )
    }


}

export default NewGame;