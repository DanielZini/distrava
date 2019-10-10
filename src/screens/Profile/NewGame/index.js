import React from 'react';
import { Text, FlatList, Keyboard } from 'react-native';
import { ViewPager } from 'rn-viewpager'
import Button from '../../../components/Button';
import InputSearch from '../../../components/InputSearch';
import cmStyles from '../../../commonStyles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconAwesome from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import StepIndicator from 'react-native-step-indicator';
import CardMini from '../../../components/CardMini';
import { AirbnbRating } from 'react-native-ratings';
import CustomModal from '../../../components/CustomModal';
import loadingGif from '../../../../assets/img/loading.gif';
import { 
    Container,
    NavSteps,
    ItemStep,
    WrapActionButtons,
    ButtonItem,
    WrapSearchInput,
    WrapRating,
    ListCards,
    DescStep,
    ItemRating,
    Label,
    LoadingGif,
    TextModal,
} from './styles';
import { ScrollView } from 'react-native-gesture-handler';

// custom styles
const customStyles = {
    stepIndicatorSize: 45,
    currentStepIndicatorSize: 50,
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
        size: 25
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
        modalLoadingVisible: false,
        statusLoading: '',
        modalSuccessRegisterVisible: false,
        searchTerm: '',
        callBackMsgFirstStep: '',
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
    searchGame = async () => {
        Keyboard.dismiss();

        let listGames = [];
        let gameUri = null;

        this.setState({ statusLoading: 'Procurando jogos', modalLoadingVisible: true });

        await axios({
            url: "https://api-v3.igdb.com/games",
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'user-key': '45e1065af8ec5abffd737abcde75a386'
            },
            data: `fields name, cover.image_id; search "${this.state.searchTerm}"; where platforms.category = (5, 1); limit 50;`
        })
            .then(response => {

                if (response.data.length > 0){
                    
                    this.setState({ callBackMsgFirstStep: 'Selecione seu jogo e toque em próximo' });

                    response.data.forEach(el => {

                        if ('cover' in el){
                            gameUri = el['cover'].image_id ? `https://images.igdb.com/igdb/image/upload/t_cover_big_2x/${el['cover'].image_id}.jpg` : loadingGif;
                        }

                        listGames.push({
                            active: false,
                            id: el.id,
                            gameUri: gameUri,
                            name: el.name,
                        });
                    });
                }else{
                    this.setState({ callBackMsgFirstStep: 'Nenhum jogo encontrado!' });
                }

            })
            .catch(err => {
                console.error(err);
            });

        this.setState({ 
            gamesList: listGames,
            modalLoadingVisible: false,
        });
    }

    onSelectGame = async (id) => {

        let selectedGame = [];
        let listPlatform = [];
        let platformUri = null;
        this.setState({ selectedPlatform: [] })

        const games = await this.state.gamesList.map(game => {

            if (game.id === id) {
                game = { ...game };
                game.active = true;
                selectedGame = game;
            }else{
                game.active = false;
            }

            return game;
        })

        await this.setState({ gamesList: games, selectedGame });

        await axios({
            url: "https://api-v3.igdb.com/games",
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'user-key': '45e1065af8ec5abffd737abcde75a386'
            },
            data: `fields platforms.name, platforms.platform_logo.image_id; where id = ${selectedGame.id}; limit 50;`
        })
            .then(response => {

                if (response.data) {

                    response.data[0]['platforms'].forEach(el => {

                        console.log(el);
                        

                        if ('platform_logo' in el) {
                            platformUri = el['platform_logo'].image_id ? `https://images.igdb.com/igdb/image/upload/t_logo_med/${el['platform_logo'].image_id}.png` : loadingGif;
                        }

                        listPlatform.push({
                            active: false,
                            id: el.id,
                            platformUri: platformUri,
                            name: el.name,
                        });
                    });
                }

            })
            .catch(err => {
                console.error(err);
            });

        this.setState({
            platformList: listPlatform,
        });

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

    }

    registerGame = () => {
        this.setState({ modalLoadingVisible: true, statusLoading: 'Salvando jogo'} );

        setTimeout(() => {
            this.setState({ modalLoadingVisible: false });
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
                    modalVisible={this.state.modalLoadingVisible}
                    disabledClose={true}>
                    <LoadingGif source={loadingGif} />
                    <TextModal>{this.state.statusLoading}</TextModal>
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
                            <InputSearch 
                                placeholder='Busque seu jogo' 
                                onSearch={() => this.searchGame()}
                                value={this.state.searchTerm}
                                onChangeText={searchTerm => this.setState({ searchTerm })} />
                        </WrapSearchInput>
                        <DescStep>{this.state.callBackMsgFirstStep}</DescStep>
                        <ScrollView>

                            <ListCards>
                        {
                            this.state.gamesList.length > 0 &&

                            this.state.gamesList.map((game, index) => (

                                <CardMini
                                    key={game.id}
                                    {...game}
                                    newGame={true}
                                    onSelect={() => this.onSelectGame(game.id)} />
                            ))

                        }
                            </ListCards>
                        </ScrollView>
                    </ItemStep>

                    <ItemStep key="1">
                        <DescStep>Escolha a plataforma do seu jogo</DescStep>
                        <FlatList
                            columnWrapperStyle={{ justifyContent: 'space-between', paddingHorizontal: 15 }}
                            numColumns={2}
                            data={this.state.platformList}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) =>
                                <CardMini {...item} isPlatform={true} newGame={true} onSelect={() => this.onSelectPlatform(item.id)} />}
                        />

                    </ItemStep>

                    <ItemStep key="2">
                        <DescStep>Atribua uma nota de 1 a 5 para o estado em que se encontra seu jogo</DescStep>
                        <WrapRating>
                            <ItemRating>
                                <Label>Caixa</Label>
                                <AirbnbRating
                                    type='star'
                                    count={5}
                                    defaultRating={0}
                                    size={35}
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
                                    size={35}
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
                                    size={35}
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