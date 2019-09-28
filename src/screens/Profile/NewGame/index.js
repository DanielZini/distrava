import React from 'react';
import { Text, FlatList, Keyboard } from 'react-native';
import { ViewPager } from 'rn-viewpager'
import Button from '../../../components/Button';
import InputSearch from '../../../components/InputSearch';
import cmStyles from '../../../commonStyles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconAwesome from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from 'react-native-gesture-handler';
import StepIndicator from 'react-native-step-indicator';
import CardMini from '../../../components/CardMini';
import { AirbnbRating } from 'react-native-ratings';
import CustomModal from '../../../components/CustomModal';
import loafingGif from '../../../../assets/img/loading.gif';
import { 
    Container,
    NavSteps,
    ItemStep,
    WrapActionButtons,
    ButtonItem,
    WrapSearchInput,
    WrapRating,
    DescStep,
    ItemRating,
    Label,
    LoadingGif,
    TextModal,
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
];
const mocPlatforms = [
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
]

class NewGame extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Cadastrar novo jogo',
            headerRight: <Icon name='gamepad' size={30} color='#FFFFFF' style={{ marginRight: 15 }} />,
        };
    };

    state = {
        modalRegisterVisible: false,
        modalSuccessRegisterVisible: false,
        currentPage: 0,
        gamesList: [],
        platformList: [],
        selectedGame: [],
        selectedPlatform: [],
        rateBox: 0,
        rateMedia: 0,
        rateManual: 0,
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

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    // Functions games ------------------------------
    searchGame = () => {
        Keyboard.dismiss();
        this.setState({ gamesList: mocGames, platformList: mocPlatforms });
    }

    onSelectGame = (id) => {

        let selectedGame = [];

        const games = this.state.gamesList.map(game => {

            if (game.id === id) {
                game = { ...game };
                game.active = true;
                selectedGame = game;
            }else{
                game.active = false;
            }

            return game;
        })

        this.setState({ gamesList: games, selectedGame });
    }

    onSelectPlatform = (id) => {

        let selectedPlatform = [];

        const platforms = this.state.platformList.map(platform => {

            if (platform.id === id) {
                platform = { ...platform };
                platform.active = true;
                selectedPlatform = platform;
            }else{
                platform.active = false;
            }

            return platform;

        })
        this.setState({ platformList: platforms, selectedPlatform });

        setTimeout(() => {
            console.log(this.state.selectedGame);
            console.log(this.state.selectedPlatform);
        }, 1000);
    }

    registerGame = () => {
        this.setState({ modalRegisterVisible: true} );

        setTimeout(() => {
            this.setState({ modalRegisterVisible: false });
            this.setState({ modalSuccessRegisterVisible: true });
        }, 2000);
        setTimeout(() => {
            this.setState({ modalSuccessRegisterVisible: false });
            this.props.navigation.goBack();
        }, 5000);
    }

    render(){
        return(
            <Container>

                <CustomModal
                    modalVisible={this.state.modalRegisterVisible}
                    disabledClose={true}>
                    <LoadingGif source={loafingGif} />
                    <TextModal>Cadastrando...</TextModal>
                </CustomModal>
                <CustomModal
                    modalVisible={this.state.modalSuccessRegisterVisible}
                    disabledClose={true}>
                    <IconAwesome name='thumbs-o-up' size={50} color={cmStyles.cl.primary} />
                    <TextModal>Jogo cadastrado com sucesso!</TextModal>
                </CustomModal>

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
                    

                    {/* COMEÇA STEPS -------------------------------------------------- */}

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
                                <CardMini {...item} newGame={true} onSelect={() => this.onSelectGame(item.id)} />}
                        />
                    </ItemStep>

                    <ItemStep key="1">
                        <DescStep>Escolha a plataforma do seu jogo</DescStep>
                        <FlatList
                            columnWrapperStyle={{ justifyContent: 'space-between', paddingHorizontal: 15 }}
                            numColumns={2}
                            data={this.state.platformList}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) =>
                                <CardMini {...item} newGame={true} onSelect={() => this.onSelectPlatform(item.id)} />}
                        />

                    </ItemStep>

                    <ItemStep key="2">
                        <DescStep>Atribua uma nota de 1 a 5 para seu jogo</DescStep>
                        <WrapRating>
                            <ItemRating>
                                <Label>Caixa</Label>
                                <AirbnbRating
                                    type='star'
                                    count={5}
                                    defaultRating={0}
                                    size={40}
                                    showRating={false}
                                    onFinishRating={rating => this.setState({ rateBox: rating })}
                                />
                            </ItemRating>
                            <ItemRating>
                                <Label>Mídia</Label>
                                <AirbnbRating
                                    type='star'
                                    count={5}
                                    defaultRating={0}
                                    size={40}
                                    showRating={false}
                                    onFinishRating={rating => this.setState({rateMedia: rating})}
                                />
                            </ItemRating>
                            <ItemRating>
                                <Label>Manual</Label>
                                <AirbnbRating
                                    type='star'
                                    count={5}
                                    defaultRating={0}
                                    size={40}
                                    showRating={false}
                                    onFinishRating={rating => this.setState({rateManual: rating})}
                                />
                            </ItemRating>

                        </WrapRating>
                    </ItemStep>

                    {/* TERMINA STEPS -------------------------------------------------- */}

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
                            this.state.currentPage === 0 ?
                                // Next Button Game
                                <Button
                                    onPress={() => this.onChangeStep(this.state.currentPage + 1)}
                                        disabled={this.state.selectedGame.length === 0 ? true : false}>
                                    Próximo
                                </Button>
                            :   // Next Button Platform
                                <Button
                                    onPress={() => this.onChangeStep(this.state.currentPage + 1)}
                                    disabled={this.state.selectedPlatform.length === 0 ? true : false}>
                                    Próximo
                                </Button>
                        :
                        <Button
                            onPress={() => this.registerGame()}
                            disabled={
                                this.state.rateBox === 0 || 
                                this.state.rateMedia === 0 || 
                                this.state.rateManual === 0 ? true : false 
                                }
                        >
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