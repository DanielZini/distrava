import React from 'react';
import { Modal, Text, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    Container,
    CloseButton,
    BackgroundOpacity,
    Content,
    Title,
} from './styles';

export default props =>{

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={props.modalVisible}
            onRequestClose={props.closeModal}
            >
            <Container>
                <TouchableWithoutFeedback onPress={props.closeModal}>
                    <BackgroundOpacity></BackgroundOpacity>
                </TouchableWithoutFeedback>

                <Content>
                    <CloseButton>
                        {!props.disabledClose &&
                        <TouchableWithoutFeedback onPress={props.closeModal}>
                            <Icon name='close' size={30} color='#FFFFFF'/>
                        </TouchableWithoutFeedback>
                        }
                    </CloseButton>
                    {props.title && <Title>{props.title}</Title>}
                    {props.children}
                </Content>
            </Container>
        </Modal>
    );
}