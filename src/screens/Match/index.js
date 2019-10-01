import React, { Component } from 'react';
import { View } from 'react-native';
import cmStyles from '../../commonStyles';
import { ScrollView } from 'react-native-gesture-handler';
import gameImg from '../../../assets/img/exemples/cover_2x.jpg';
import defaultProfile from '../../../assets/img/defaultPerson.png';
import ItemMatch from '../../components/ItemMatch';
import CustomModal from '../../components/CustomModal';
import Button from '../../components/Button';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    Container,
    EmptyAlert,
} from './styles';

// config car game --------
let gameName = 'The Legend of Zelda: Ocarina of Time 3D'

let gameImageId = 'co1nl5';
const gameUri = 'https://images.igdb.com/igdb/image/upload/t_cover_big_2x/' + gameImageId + '.jpg';

const mocMatches = [
    {
        id: 1,
        myGame: gameUri,
        matchGame: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1p98.jpg',
        personPhoto: defaultProfile,
        personName: 'Daniel Zini da Silva',
        personAddress: 'Indaiatuba/SP',
        status: 0,
    },
    {
        id: 2,
        myGame: gameUri,
        matchGame: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1p98.jpg',
        personPhoto: defaultProfile,
        personName: 'Daniel Zini da Silva',
        personAddress: 'Indaiatuba/SP',
        status: 1,
    },
    {
        id: 3,
        myGame: gameUri,
        matchGame: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1p98.jpg',
        personPhoto: defaultProfile,
        personName: 'Daniel Zini da Silva',
        personAddress: 'Indaiatuba/SP',
        status: 2,
    },
]
/**
 * status: 0 = aberto
 * status: 1 = trocado
 * status: 2 = cancelado */
class Match extends Component {

    state = {
        modalVisible: false,
        matches: []
    };

    componentDidMount() {
        this.loadGames();
    }
    loadGames = () => {
        this.setState({ matches: mocMatches })
    }

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    render(){
        return(
            <View style={{ width: '100%', height: '100%', backgroundColor: '#f5f5f5'}}>
            {
                this.state.matches.length > 0 ?

                <ScrollView style={{height: '100%'}}>
                    <CustomModal
                        modalVisible={this.state.modalVisible}
                        closeModal={() => this.setModalVisible(false)}
                        title='Finalizar troca'>

                        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between'}}>
                            <View style={{width: '48%'}}>
                                <Button custom={true}>
                                    <Icon name='handshake-o' size={30} color='#FFFFFF'/>
                                </Button>
                            </View>
                            <View style={{ width: '48%' }}>
                                <Button custom={true} btColor={cmStyles.cl.second}>
                                    <Icon name='thumbs-o-down' size={30} color='#FFFFFF'/>
                                </Button>
                            </View>
                        </View>
                    </CustomModal>

                    <Container>
                    {
                        this.state.matches.map((match, index) => (
                            <ItemMatch
                                key={match.id}
                                myGame={match.myGame}
                                matchGame={match.matchGame}
                                personPhoto={match.personPhoto}
                                personName={match.personName}
                                personAddress={match.personAddress}
                                status={match.status}
                                doExchange={() => this.setModalVisible(true)}
                            />
                        ))
                    }

                    {/* <ItemMatch
                        myGame={gameImg}
                        matchGame={gameImg}
                        personPhoto={defaultProfile}
                        personName='Daniel Zini da Silva'
                        personAddress='Indaiatuba/SP'
                        status={0}
                        doExchange={() => this.setModalVisible(true)}
                        /> */}
                    </Container>
                </ScrollView>
            :
                <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignContent: 'center'}}>
                    <EmptyAlert>Você não possui combinações de jogos ainda! =[</EmptyAlert>
                </View>

            }
            </View>
        )
    }
}

export default Match;