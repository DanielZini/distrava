import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import gameImg from '../../../assets/img/exemples/cover_2x.jpg';
import Card from '../../components/Card';
import Button from '../../components/Button';
import {
    Container,
    Content,
    Footer,
    WrapButton,
    TextButton,
} from './styles';

const Main = ({ navigation }) =>  {

    const navigationScreen = screen => {
        navigation.navigate(screen);
    }

    return(
        <Container>
            <Content>
                <Card gameSrc={gameImg} title="The Legend of Zelda: Breath of the Wild" order={1} />
                <Card gameSrc={gameImg} title="The Legend of Zelda: Breath of the Wild" order={2} />
            </Content>
            <Footer>
                <WrapButton>
                    <Button custom={true}
                        btColor="#AAA">
                        <TextButton>Próximo</TextButton>
                        <Icon name='trending-flat' color='#FFF' size={35} />
                    </Button>
                </WrapButton>
                <WrapButton>
                    <Button custom={true}>
                        <Icon name='swap-horiz' color='#FFF' size={35} />
                        <TextButton>Quero</TextButton>
                    </Button>
                </WrapButton>
            </Footer>
        </Container>
    )
}

export default Main;