import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import { Ionicons } from '@expo/vector-icons'; 


export default function Mon() {

    const [table, setTable] = useState([
        {id: '1', name: 'ИнЯз Проф', teacher: 'Колинко Н. Г.', cab: '3-214', time: '9:00-10:40'},
        {id: '2', name: 'Тест ПО', teacher: 'Левонюк Е. А.', cab: '601', time: '10:50-12:40'},
        {id: '3', name: 'Тех разр ПО', teacher: 'Кулецкая Ю. Н.', cab: '501 (к)', time: '13:00-14:40'},
        {id: '4', name: 'Психология', teacher: 'Лихачёва О. П.', cab: '3-112', time: '14:40-16:30'},
    ])

    const renderingItem = ({item}) => {
        if(item.id == '1') {
            return (
            <View style={styles.mainContainerFirst}>
                <View style={styles.numberLessonContainer}>
                    <Text style={styles.numberLesson}>{item.id}</Text>
                    <Text style={{fontFamily: 'rub-reg', fontSize: 12, color: '#FFFFFF', marginTop: 15}}>{item.time}</Text>
                </View>
                <View style={{marginTop: 7, marginLeft: 6, width: 150}}>
                    <View style={styles.infoSection}>
                        <Ionicons name="md-school-outline" size={16} color="#858585"/>
                        <Text style={{fontFamily: 'rub-med', fontSize: 14, marginLeft: 12}}>{item.name}</Text>
                    </View>
                    <View style={styles.infoSection}>
                        <Ionicons name="person-outline" size={16} color="#858585" />
                        <Text style={{fontFamily: 'rub-reg', fontSize: 14, marginLeft: 12}}>{item.teacher}</Text>
                    </View>
                    <View style={styles.infoSection}>
                        <Ionicons name="md-location-outline" size={16} color="#858585" />
                        <Text style={{fontFamily: 'rub-reg', fontSize: 12, marginLeft: 12}}>{item.cab}</Text>
                    </View>
                </View>
                <View style={styles.typeLesson}>
                    <Text style={{fontFamily: 'rub-med', fontSize: 8, color: '#FFFFFF', top: '15%'}} >Лекция</Text>
                </View>
            </View> 
        )} else {
            return (
            <View style={styles.mainContainer}>
                <View style={styles.numberLessonContainer}>
                    <Text style={styles.numberLesson}>{item.id}</Text>
                    <Text style={{fontFamily: 'rub-reg', fontSize: 12, color: '#FFFFFF', marginTop: 15}}>{item.time}</Text>
                </View>
                <View style={{marginTop: 7, marginLeft: 6, width: 150}}>
                    <View style={styles.infoSection}>
                        <Ionicons name="md-school-outline" size={16} color="#858585" />
                        <Text style={{fontFamily: 'rub-med', fontSize: 14, marginLeft: 12}}>{item.name}</Text>
                    </View>
                    <View style={styles.infoSection}>
                        <Ionicons name="person-outline" size={16} color="#858585" />
                        <Text style={{fontFamily: 'rub-reg', fontSize: 14, marginLeft: 12}}>{item.teacher}</Text>
                    </View>
                    <View style={styles.infoSection}>
                        <Ionicons name="md-location-outline" size={16} color="#858585" />
                        <Text style={{fontFamily: 'rub-reg', fontSize: 12, marginLeft: 12}}>{item.cab}</Text>
                    </View>
                </View>
                <View style={styles.typeLesson}>
                    <Text style={{fontFamily: 'rub-med', fontSize: 8, color: '#FFFFFF', top: '15%'}} >Лекция</Text>
                </View>
            </View> 
        )}
    }
    
    return (
        <View style={{height: '100%', backgroundColor: '#FFFFFF', alignItems: 'center'}}>
            <View>
                <FlatList
                    keyExtractor={(item) => item.id}
                    data={table}
                    renderItem={renderingItem} 
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        width: 350,
        height: 85,
        borderColor: '#FF6E6E',
        borderWidth: 1.5,
        marginTop: 20,
        borderRadius: 10, 
        flexDirection: 'row',
    },
    mainContainerFirst :{
        width: 350,
        height: 85,
        borderColor: '#FF6E6E',
        borderWidth: 1.5,
        marginTop: 80,
        borderRadius: 10, 
        flexDirection: 'row',
    },
    numberLessonContainer: {
        width: 85,
        height: 85,
        backgroundColor: '#FF6E6E',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        marginTop: -1.5,
        marginLeft: -1.5,
        flexDirection: 'column',
        alignItems: 'center' 
    },
    numberLesson: {
        fontFamily: 'rub-bold',
        fontSize: 30,
        color: '#FFFFFF',
        top: '15%'

    },
    infoSection: {
        height: '33%',
        flexDirection: 'row'
    },
    typeLesson: {
        backgroundColor: '#FF6E6E',
        width: 50,
        height: 14,
        alignItems: 'center',
        borderRadius: 4,
        marginTop: 6,
        marginLeft: 51
    }
});