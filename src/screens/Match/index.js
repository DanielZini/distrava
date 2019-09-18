import React, { Component } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import gameImg from '../../../assets/img/exemples/cover_2x.jpg';
import defaultProfile from '../../../assets/img/defaultPerson.png';
import ItemMatch from '../../components/ItemMatch';
import ModalExchange from '../../components/ModalExchange';
import {
    Container,
} from './styles';

class Match extends Component {

    state = {
        modalVisible: false,
    };

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    render(){
        return(
            <ScrollView>
                <ModalExchange
                    modalVisible={this.state.modalVisible}
                    closeModal={() => this.setModalVisible(false)} />
                <Container>
                    <ItemMatch
                        myGame={gameImg}
                        matchGame={gameImg}
                        photoProfile={defaultProfile}
                        nameProfile='Daniel Zini da Silva'
                        inNegotiation={true}
                        negotiationSuccess={null}
                        doExchange={() => this.setModalVisible(true)}
                        />
                    <ItemMatch
                        myGame={gameImg}
                        matchGame={gameImg}
                        photoProfile={defaultProfile}
                        nameProfile='Daniel Zini da Silva'
                        inNegotiation={false}
                        negotiationSuccess={true}
                        doExchange={null}
                        />
                    <ItemMatch
                        myGame={gameImg}
                        matchGame={gameImg}
                        photoProfile={defaultProfile}
                        nameProfile='Daniel Zini da Silva'
                        inNegotiation={false}
                        negotiationSuccess={false}
                        doExchange={null}
                        />
    
                </Container>
            </ScrollView>
        )
    }
}

export default Match;