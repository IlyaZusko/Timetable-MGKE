import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, View, Image, FlatList } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 



export default function Mon() {

    const [isLoading, setLoading] = useState(false);
    const [lessonNameParse, setLessonNameParse] = useState([]);

    const getMonday = () => {
        fetch('https://github.com/IlyaZusko/Timetable-MGKE/blob/main/Timetable.json')
          .then((response) => response.text())
          .then((json) => setLessonNameParse(json))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
    };

    useEffect(() => {
        setLoading(true);
        getMonday();
    }, []);

    return (
        <View style={{height: '100%', backgroundColor: '#FFFFFF', alignItems: 'center'}}>
            {isLoading ? <Text>Loading...</Text> : (
                
                <View style={styles.mainContainer}>
                <View style={styles.numberLessonContainer}>
                    <Text style={styles.numberLesson}>1</Text>
                    <Text style={{fontFamily: 'rub-reg', fontSize: 12, color: '#FFFFFF', marginTop: 15}}>9:00-10:40</Text>
                </View>
                <View style={{marginTop: 7, marginLeft: 6}}>
                    <View style={styles.infoSection}>
                        <FlatList
                        data={lessonNameParse}
                        // keyExtractor={({id}) => id.toString() }
                        renderItem={({item}) => <Text>{console.log(item.lessonName)}</Text>}
                        />
                        {/* <Ionicons name="md-school-outline" size={16} color="#858585" />
                        <Text style={{fontFamily: 'rub-med', fontSize: 14, marginLeft: 12}}></Text> */}
                    </View>
                    <View style={styles.infoSection}>
                        <Ionicons name="person-outline" size={16} color="#858585" />
                        <Text style={{fontFamily: 'rub-reg', fontSize: 14, marginLeft: 12}}>Потоцкий Д. М.</Text>
                    </View>
                    <View style={styles.infoSection}>
                        <Ionicons name="md-location-outline" size={16} color="#858585" />
                        <Text style={{fontFamily: 'rub-reg', fontSize: 12, marginLeft: 12}}>3-212</Text>
                    </View>
                </View>
                <View style={styles.typeLesson}>
                    <Text style={{fontFamily: 'rub-med', fontSize: 8, color: '#FFFFFF', top: '15%'}} >Лекция</Text>
                </View>
            </View>
            )}
            
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
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
        marginLeft: 72
    }
});