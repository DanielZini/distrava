import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ViewPager } from 'rn-viewpager'
import cmStyles from '../../../commonStyles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import defaultProfile from '../../../../assets/img/defaultPerson.png';
import { ScrollView } from 'react-native-gesture-handler';
import StepIndicator from 'react-native-step-indicator';
import { 
    Container,

} from './styles';
const PAGES = ['Page 1', 'Page 2', 'Page 3']
const customStyles = {
    stepIndicatorSize: 40,
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
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: '#E04825',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: 13,
    currentStepLabelColor: '#E04825'
}

const getStepIndicatorIconConfig = ({ position, stepStatus }) => {
    const iconConfig = {
        name: 'feed',
        color: stepStatus === 'finished' ? '#ffffff' : '#E04825',
        size: 20
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

class NewGame extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Cadastrar novo jogo',
            headerRight: <Icon name='gamepad' size={30} color='#FFFFFF' style={{ marginRight: 15 }} />,
        };
    };
    
    state = {
        currentPosition: 0
    }

    componentWillReceiveProps(nextProps, nextState) {
        if (nextState.currentPage != this.state.currentPage) {
            if (this.viewPager) {
                this.viewPager.setPage(nextState.currentPage)
            }
        }
    }

    renderViewPagerPage = data => {
        return (
            <View>
                <Text>{data}</Text>
            </View>
        )
    }

    render(){
        return(
            <Container>
                <View style={styles.stepIndicator}>
                <StepIndicator
                    renderStepIndicator={this.renderStepIndicator}
                    customStyles={customStyles}
                    currentPosition={this.state.currentPage}
                    onPress={this.onStepPress}
                    stepCount={3}
                    labels={[
                        'Jogo',
                        'Plataforma',
                        'Avaliação',
                    ]}
                />
                </View>
                <ViewPager
                    style={{ flexGrow: 1 }}
                    ref={viewPager => {
                        this.viewPager = viewPager
                    }}
                    onPageSelected={page => {
                        this.setState({ currentPage: page.position })
                    }}
                >
                    {PAGES.map(page => this.renderViewPagerPage(page))}
                </ViewPager>
            </Container>
        )
    }

    renderStepIndicator = params => (
        <Icon {...getStepIndicatorIconConfig(params)} />
    )
    onStepPress = position => {
        this.setState({ currentPage: position })
        this.viewPager.setPage(position)
    }
}

export default NewGame;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    stepIndicator: {
        marginVertical: 50
    },
    page: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    stepLabel: {
        fontSize: 12,
        textAlign: 'center',
        fontWeight: '500',
        color: '#999999'
    },
    stepLabelSelected: {
        fontSize: 12,
        textAlign: 'center',
        fontWeight: '500',
        color: '#4aae4f'
    }
})