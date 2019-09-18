import React from 'react';
import SrollView from 'react-native';
import gameImg from '../../../assets/img/exemples/cover_2x.jpg';
import defaultProfile from '../../../assets/img/defaultPerson.png';
import ItemMatch from '../../components/ItemMatch';
import { 
    Container,
} from './styles';
import { ScrollView } from 'react-native-gesture-handler';

const Match = ({ navigation }) => {

    return(
        <ScrollView>
            <Container>
                <ItemMatch 
                    myGame={gameImg}
                    matchGame={gameImg}
                    photoProfile={defaultProfile}
                    nameProfile='Daniel Zini da Silva'
                    inNegotiation={true}
                    negotiationSuccess={null}
                    />
                <ItemMatch 
                    myGame={gameImg}
                    matchGame={gameImg}
                    photoProfile={defaultProfile}
                    nameProfile='Daniel Zini da Silva'
                    inNegotiation={false}
                    negotiationSuccess={true}
                    />
                <ItemMatch 
                    myGame={gameImg}
                    matchGame={gameImg}
                    photoProfile={defaultProfile}
                    nameProfile='Daniel Zini da Silva'
                    inNegotiation={false}
                    negotiationSuccess={false}
                    />
                
            </Container>
        </ScrollView>
    )
}

export default Match;