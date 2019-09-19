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