import React from 'react';
import gameImg from '../../../../assets/img/exemples/cover_2x.jpg';
import cmStyles from '../../../commonStyles';
import {
    Container,
    GameImage,
    Content,
} from './styles';

class GameDetail extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('title', 'Jogo'),
            headerStyle: {
                elevation: 0,
                shadowOpacity: 0,
                backgroundColor: 'rgba(0, 0, 0, .8)',
            },
            headerTintColor: '#FFF',
            headerTransparent: true,
        };
    };

    render(){

        const { navigation } = this.props;
        return(
            <Container>
                <GameImage source={navigation.getParam('photo')} />
            </Container>
        )
    }
}

export default GameDetail;