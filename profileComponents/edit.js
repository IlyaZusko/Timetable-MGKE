import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, SafeAreaView, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

import {Context} from '../Contexts/context.js';





export default function Settings({ navigation }) {

    const loadSceneProfile = () => {
        navigation.navigate('Main')
    }

    const [name, onChangeName] = useState('');

    const [context, setContext] = useContext(Context);
    
    const [value, setValue] = useState('value');
    const { getItem, setItem } = useAsyncStorage('UserName');

    const writeItemToStorage = async newValue => {
        await setItem(newValue);
        setValue(newValue);
    };

    function setItemsInStorages() {
        writeItemToStorage(name);
        setContext(name);
    };

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
        <View style={{height: '100%', backgroundColor: '#FFFFFF'}}>
            
            <View style={styles.headerContainer}> 
                <View style={{width: 230, height: 48}}>
                    <Text style={{fontFamily: 'rub-semibold', fontSize: 20, marginTop: 14}}>
                         Настройки аккаунта
                    </Text>
                    <TouchableOpacity activeOpacity={0.4} style={{width: 44, height: 44, backgroundColor: '#F8AE90', borderRadius: '50%', position:'absolute', left: 290, top: 4, alignItems:'center'}} onPress={loadSceneProfile} >
                        <Ionicons name="arrow-back-outline" size={30} color="white" style={{marginTop: 6, marginLeft: 2}} />
                    </TouchableOpacity>
                </View>
                <View style={{width: 350, height: 2, backgroundColor: '#F8AE90', borderRadius: '50%', marginTop: 20}}></View>
            </View>
            <View style={styles.ParamCont}>
                <View style={styles.parametrs}>
                    <Text style={{fontFamily: 'rub-med', fontSize: 16, marginBottom: 2}}>Имя пользователя</Text>
                    <TextInput
                    style={{borderWidth: 1.5, borderColor: '#FF6E6E', borderRadius: 6, height: 34, paddingLeft: 10, fontFamily: 'rub-med'}} 
                    onChangeText={onChangeName}
                    value={name}
                    placeholder={isContextEmpty()}
                    />
                </View>
                <View style={styles.parametrs}>
                    <Text style={{fontFamily: 'rub-med', fontSize: 16, marginBottom: 2}}>Дата рождения</Text>
                    <TextInput style={{borderWidth: 1.5, borderColor: '#FF6E6E', borderRadius: 6, height: 34, paddingLeft: 10, fontFamily: 'rub-med'}} placeholder='00.00.0000' />
                </View>
            </View>
            <TouchableOpacity style={{width: 228, height: 32, backgroundColor: '#FF6E6E', borderRadius: 6, marginRight: 'auto', marginLeft: 'auto'}}  onPress={() => setItemsInStorages()}>
                <View style={{alignItems: 'center', top: '20%', flexDirection: 'row', marginTop: -40, marginLeft: 60 }}>
                    <Text style={{fontFamily: 'rub-med', fontSize: 16, color: '#FFF',}}>Применить</Text>
                    <Feather name="check" size={20} color="#FFF" style={{marginLeft: 6}}/>
                </View>
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
    ParamCont:{
        // borderWidth: 1,
        // borderColor: '#000',
        width: 350,
        height: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 20
    },
    parametrs: {
        // borderWidth: 1,
        // borderColor: '#000',
        width: 350,
        height: 56,
        marginBottom: 20
    }
});