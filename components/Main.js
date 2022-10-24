import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import { LinearGradient } from "expo-linear-gradient";
// Icons
import { AntDesign } from '@expo/vector-icons';


function DateNow() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    today = dd + '.' + mm + '.' + yyyy;
    return today
}

export default function Main({ navigation }) {

    const loadSceneGroupTimetable = () => {
        navigation.navigate('GroupTimetable');
    }

    return (
        <View style={{ height: '100%', backgroundColor: '#FFFFFF' }}>

            {/* --------------Header-------------- */}
            <View style={styles.headerContainer}>
                <View style={{ width: 181, height: 47 }}>
                    <Text style={styles.sectionName} >Расписание МГКЭ</Text>
                    <Text style={styles.subText} > {DateNow()} </Text>
                    <Image source={require('../assets/img/Logo.png')} style={{ width: 48, height: 48, left: 290, position: 'absolute' }} />
                </View>
                <View style={styles.bottomLine}></View>
            </View>
            <View style={{ width: 350, height: 206, backgroundColor: '#91B3FA', borderRadius: 20, marginRight: 'auto', marginLeft: 'auto', marginTop: 40, position: 'relative' }}>
                <Image source={require('../assets/img/P1.png')} style={{ width: 300, height: 206, marginRight: 'auto', marginLeft: 'auto' }} />
                <TouchableOpacity activeOpacity={0.3} style={{ width: 152, height: 165, position: 'absolute', borderRadius: 16, marginTop: 10, marginLeft: 167 }} onPress={loadSceneGroupTimetable} >
                    <LinearGradient colors={["#DBE9FF", "#B3ADEB"]} style={{ width: 172, height: 185, position: 'absolute', borderRadius: 16, opacity: 1 }}>
                        <View style={{ width: 130, height: 93, marginRight: 'auto', marginLeft: 'auto', marginTop: 12 }}>
                            <Text style={{ fontFamily: 'rub-semibold', fontSize: 20, color: '#fff', textAlign: 'center' }}>Расписание групп</Text>
                            <Text style={{ fontFamily: 'rub-light', fontSize: 11, color: '#fff', textAlign: 'center', marginTop: 5 }}>расписание занятий выбранной группы по дням</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontFamily: 'rub-reg', fontSize: 18, color: '#fff', textAlign: 'center', marginTop: 30 }}>Посмотреть</Text>
                                <AntDesign name="doubleright" size={18} color="#fff" style={{ marginTop: 32, marginLeft: 5 }} />
                            </View>

                        </View>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
            <View style={{ width: 350, height: 206, backgroundColor: '#B49D91', borderRadius: 20, marginRight: 'auto', marginLeft: 'auto', marginTop: 22, position: 'relative' }}>
                <Image source={require('../assets/img/P3.png')} style={{ width: 320, height: 210, marginRight: 'auto', marginLeft: 'auto' }} />
                <TouchableOpacity activeOpacity={0.3} style={{ width: 152, height: 165, position: 'absolute', borderRadius: 16, marginTop: 10, marginLeft: 167 }}>
                    <LinearGradient colors={["#7C909A", "#CDB9AE"]} start={[0.1, 0.1]} style={{ width: 172, height: 185, position: 'absolute', borderRadius: 16, opacity: 1 }}>
                        <View style={{ width: 130, height: 93, marginRight: 'auto', marginLeft: 'auto', marginTop: 12 }}>
                            <Text style={{ fontFamily: 'rub-semibold', fontSize: 20, color: '#fff', textAlign: 'center' }}>Расписание учителей</Text>
                            <Text style={{ fontFamily: 'rub-light', fontSize: 11, color: '#fff', textAlign: 'center', marginTop: 5 }}>расписание занятий выбранной группы по дням</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontFamily: 'rub-reg', fontSize: 18, color: '#fff', textAlign: 'center', marginTop: 30 }}>Посмотреть</Text>
                                <AntDesign name="doubleright" size={18} color="#fff" style={{ marginTop: 32, marginLeft: 5 }} />
                            </View>
                        </View>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    // ----------Header----------
    headerContainer: {
        width: 350,
        height: '8%',
        marginTop: 54,
        marginLeft: 31,
    }, 
    sectionName: {
        fontFamily: 'rub-semibold', 
        fontSize: 20,
    },
    subText: {
        color: '#F8AE90', 
        fontFamily: 'rub-reg', 
        fontSize: 15, 
        marginTop: 4,
    },
    bottomLine: {
        width: 350, 
        height: 2, 
        backgroundColor: '#F8AE90', 
        borderRadius: '50%', 
        marginTop: 20,
    }
});