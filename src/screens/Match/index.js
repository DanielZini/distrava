import React, { Component } from 'react';
import { View } from 'react-native';
import cmStyles from '../../commonStyles';
import { ScrollView } from 'react-native-gesture-handler';
import ItemMatch from '../../components/ItemMatch';
import CustomModal from '../../components/CustomModal';
import Button from '../../components/Button';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import { server, showError } from '../../common';
import FlashMessage, { showMessage, hideMessage } from 'react-native-flash-message';
import {
    Container,
    EmptyAlert,
} from './styles';

/**
 * status: 0 = aberto
 * status: 1 = trocado
 * status: 2 = cancelado */
class Match extends Component {

    state = {
        modalVisible: false,
        matches: [],
        finishExchange: [],
    };

    componentDidMount() {
        this._subscribe = this.props.navigation.addListener('didFocus', () => {
            this.loadExchanges();
        });

    }

    loadExchanges = async () => {

        try {
            const res = await axios.get(`${server}/get-exchanges`);

            this.setState({ matches: res.data })

        } catch (err) {
            showError(err);
        }
    }

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    getParamsStatus = (id_exchange, id_game_owner, id_match_game) => {

        const params = {
            id_exchange,
            id_game_owner,
            id_match_game
        }

        this.setState({ finishExchange: params})
        this.setModalVisible(true)
    }

    updateStatusChange = async (params_exchange, status) => {

        try{

            await axios.post(`${server}/update-status-exchange`, {
                id_exchange: params_exchange.id_exchange,
                id_game_a: params_exchange.id_game_owner,
                id_game_b: params_exchange.id_match_game,
                status: status
            });

            this.loadExchanges();

            showMessage({
                message: "Troca encerrada!",
                type: "default",
                backgroundColor: cmStyles.cl.second, // background color
                color: "#FFFFFF", // text color
            });
        }catch(err){

            showMessage({
                message: "Algo deu errado",
                type: "danger",
                duration: 3000
            });
        }

        this.setModalVisible(false)
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
                                <Button 
                                    custom={true}
                                    onPress={() => this.updateStatusChange(this.state.finishExchange, 1)}>
                                    <Icon name='handshake-o' size={30} color='#FFFFFF'/>
                                </Button>
                            </View>
                            <View style={{ width: '48%' }}>
                                <Button 
                                    custom={true}
                                    btColor={cmStyles.cl.second}
                                    onPress={() => this.updateStatusChange(this.state.finishExchange, 2)}>
                                    <Icon name='thumbs-o-down' size={30} color='#FFFFFF'/>
                                </Button>
                            </View>
                        </View>
                    </CustomModal>

                    <Container>
                    {
                        this.state.matches.map((match, index) => (
                            <ItemMatch
                                key={match.id_exchange}
                                myGamePhoto={match.ownerGamePhoto}
                                myGameName={match.ownerGameName}
                                matchGamePhoto={match.wantedGamePhoto}
                                matchGameName={match.wantedGameName}
                                personPhoto={server + '/' + match.wantedUserPhoto}
                                personName={match.wantedUserName}
                                personAddress={match.wantedUserCity + '/' + match.wantedUserState}
                                personWhatsapp={'55' + match.wantedUserWhatsapp}
                                status={match.status_exchange}
                                doExchange={() => this.getParamsStatus(match.id_exchange, match.ownerGameId, match.wantedGameId)}
                            />
                        ))
                    }

                    </Container>
                </ScrollView>
            :
                <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignContent: 'center'}}>
                    <EmptyAlert>Você não possui combinações de jogos ainda! =[</EmptyAlert>
                </View>

            }
                <FlashMessage position="top" />
            </View>
        )
    }
}

export default Match;