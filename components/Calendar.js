import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, View, Image } from 'react-native';

export default function Settings({ navigation }) {
    return (
        <View style={{height: '100%', backgroundColor: '#FFFFFF'}}>
            <View style={{marginTop: 40}}>
                <Image source={require('../assets/img/develop.png')} style={{
                    height: 300, 
                    width: 300, 
                    marginRight: 'auto',
                    marginLeft: 'auto',
                    marginTop: '20%'
                    }} />
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
                        Мы упорно трудимся над разработкой этого раздела. Мы оповестим вас когда всё будет готово!
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