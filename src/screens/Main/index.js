import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import gameImg from '../../../assets/img/exemples/cover_2x.jpg';
import Header from '../../components/Header';
import Card from '../../components/Card';
import Button from '../../components/Button';
import { 
    Container,
    Content,
    Footer,
    WrapButton,
    TextButton,
} from './styles';

const Main = () => (

    <Container>
        <Header home={true}/>
        <Content>
            <Card gameSrc={gameImg} title="The Legend of Zelda: Breath of the Wild" order={1} />
            <Card gameSrc={gameImg} title="The Legend of Zelda: Breath of the Wild" order={2} />
        </Content>
        <Footer>
            <WrapButton>
                <Button 
                    btColor="#CCC"
                    txtColor="#333"
                    custom={true}>
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

Main.navigationOptions = {
    title: 'Main',
}

export default Main;