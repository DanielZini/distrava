import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View, Alert } from 'react-native';

export default props =>{

    return (
        <View style={{ marginTop: 22 }}>
            <Modal
                animationType="slide"
                transparent={false}
                visible={props.modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                }}>
                <View style={{ marginTop: 22 }}>
                    <View>
                        <Text>Hello World!</Text>

                        <TouchableHighlight
                            onPress={props.closeModal}>
                            <Text>Hide Modal</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>

        </View>
    );
}