import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, SafeAreaView, View, TouchableOpacity, TouchableHighlight } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

import { Feather } from '@expo/vector-icons'; 


import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

import { Context } from "../Contexts/context.js";




    

export default function Settings({ navigation }) {

    const loadSceneEdit = () => {
        navigation.navigate('Edit');
    }

    const [value, setValue] = useState('value');
    const { getItem, setItem } = useAsyncStorage('UserName');

    const [context, setContext] = useContext(Context);


    const readItemFromStorage = async () => {
        const item = await getItem();
        setValue(item);
    };

    useEffect(() => {
        readItemFromStorage();
    }, []);

    function isContextEmpty() {
        if(context == '') {
            return value
        } else {
            return context
        }
    }
    

    return (
        <View style={{height: '100%', backgroundColor: '#FFFFFF',}}>
            <View style={styles.headerContainer}> 
                <View style={{width: 181, height: 47}}>
                    <Text style={{fontFamily: 'rub-semibold', fontSize: 20}}>
                         Мой профиль
                    </Text>
                    <Text style={{color: '#F8AE90', fontFamily: 'rub-reg', fontSize: 15, marginTop: 4}}> 
                        {isContextEmpty()}
                    </Text>
                    <TouchableOpacity activeOpacity={0.4} style={{width: 44, height: 44, backgroundColor: '#F8AE90', borderRadius: '50%', position:'absolute', left: 290, top: 4, alignItems:'center'}} onPress={loadSceneEdit} >
                        <Feather name="edit-2" size={24} color="white" style={{top: '22%'}}  />
                    </TouchableOpacity>
                </View>
                <View style={{width: 350, height: 2, backgroundColor: '#F8AE90', borderRadius: '50%', marginTop: 20}}></View>
            </View>
            <TouchableOpacity activeOpacity={0.4} style={styles.editGroup}>
                <View style={styles.textGroup}>
                    <View style={{marginTop: 8, marginLeft: 8}}>
                        <Text style={{fontFamily: 'rub-med', fontSize: 24}}>54</Text>
                        <Text style={{fontFamily: 'rub-med', fontSize: 20, color: '#F58B61', marginLeft: 1}}>ТП</Text>
                    </View>
                    <View style={{height: 55, width: 1, backgroundColor: '#000', marginLeft: 20, marginTop: 7}}></View>
                    <View style={{marginTop: 8, marginLeft: 20}}>
                        <Text style={{fontFamily: 'rub-med', fontSize: 13, color: '#858585', width: 280}}>Программное обеспечение информационных технологий</Text>
                        <Text style={{fontFamily: 'rub-med', fontSize: 13, color: '#858585', width: 320, marginTop: 4}}>3 курс</Text>
                    </View>
                </View>
                <View style={{width: 110, height: 30, backgroundColor: '#FFFFFF', borderRadius: 6, marginLeft: 'auto', marginRight: 'auto',  flexDirection: 'row'}}>
                    <Text style={{fontFamily: 'rub-semibold', fontSize: 14, color: '#000', marginTop: 5, marginLeft: 12}}>Изменить</Text>
                    <Feather name="chevron-right" size={24} color="black" style={{marginTop: 1.5, marginLeft: -4}}/>  
                </View>
            </TouchableOpacity>
            <View style={{flexDirection: 'row', width: 300, marginLeft: 'auto', marginRight: 'auto', justifyContent: 'space-between', marginTop: 30 }}>
                <TouchableOpacity activeOpacity={0.4} style={styles.aboutSection}>
                    <Feather name="send" size={34} color="#FF6E6E" style={styles.infoIcons}/>
                    <Text style={styles.infoText}>Обратная связь</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.4} style={styles.aboutSection}>
                    <Feather name="users" size={34} color="#009846" style={styles.infoIcons}/>
                    <Text style={styles.infoText}>О нас</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.4} style={styles.aboutSection}>
                    <Feather name="thumbs-up" size={34} color="#4737FF" style={styles.infoIcons}/>
                    <Text style={styles.infoText}>Оценить приложение</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity activeOpacity={0.6} style={styles.aboutSectionPrem}>
                
                    <Feather name="star" size={28} color="#FFFFFF" style={{marginLeft: 8}}/>
                    <Text style={{color:'#FFFFFF', fontFamily: 'rub-bold', fontSize: 16, marginLeft: 10}}>Отключить рекламу</Text>
                    
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        height: '8%',
        width: 350,
        marginTop: 54,
        marginLeft: 31,
    },
    editGroup: {
        width: 350,
        height: 120,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOpacity: 0.13,
        shadowOffset: { top: 0 },
        borderRadius: 20,
        marginRight: 'auto',
        marginLeft: 'auto',
        marginTop: 22      
    },
    textGroup: {
        // borderWidth: 1, 
        // borderColor: '#000', 
        width: 322, 
        height: 72, 
        marginTop: 12, 
        marginLeft: 'auto', 
        marginRight: 'auto',
        flexDirection: 'row'
    },
    aboutSection: {
        // borderColor: '#000',
        // borderWidth: 1,
        width: 74, 
        height: 90,
        alignItems:'center',
        flexDirection: 'column'
    },
    aboutSectionPrem: {
        width: 300, 
        height: 40,
        alignItems:'center',
        flexDirection: 'row',
        // borderColor: '#000',
        // borderWidth: 1,
        marginRight: 'auto', 
        marginLeft: 'auto',
        borderRadius: 10,
        marginTop: 16,
        backgroundColor: '#FF6E6E',
        
    },
    infoIcons: {
        marginTop: 10,   
    },
    infoText: {
        fontFamily: 'rub-light',
        fontSize: 12,
        textAlign: 'center', 
        marginTop: 10, 
        color: '#000'
    }
});