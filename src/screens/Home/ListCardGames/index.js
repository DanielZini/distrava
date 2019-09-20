import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import gameImg from '../../../../assets/img/exemples/cover_2x.jpg';
import Card from '../../../components/Card';
import Button from '../../../components/Button';
import {
    Container,
    Content,
    Footer,
    WrapButton,
    TextButton,
} from './styles';

const Main = ({ navigation }) =>  {

    const navigationScreen = (screen, name, photo) => {
        navigation.navigate(screen, {
            title: name,
            photo,
        });
    }

    return(
        <Container>
            <Content>
                <Card 
                    gameSrc={gameImg}
                    title="The Legend of Zelda: Breath of the Wild" order={1}
                    onPress={() => navigationScreen('GameDetail', 'The Legend of Zelda: Breath of the Wild', gameImg)} />
                {/* <Card 
                    gameSrc={gameImg}
                    title="The Legend of Zelda: Breath of the Wild" order={2}
                    onPress={() => navigationScreen('GameDetail')} /> */}
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