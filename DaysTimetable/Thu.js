import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, View, Image } from 'react-native';

export default function Settings({ navigation }) {
    return (
        <View style={{height: '100%', backgroundColor: '#FFFFFF'}}>
            <View style={{marginTop: 40}}>
                
                    <Text style={{
                        fontFamily: 'rub-reg',
                        textAlign: 'center',
                        fontSize: 16,
                        color: '#F8AE90',
                        width: 300,
                        marginRight: 'auto',
                        marginLeft: 'auto',
                        marginTop: 20

                    }}>
                        Четверг!
                    </Text>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    test: {
        
        color: 'black',
        fontFamily: 'rub-bold',
        fontSize: 20,
        marginTop: 60
    }
});