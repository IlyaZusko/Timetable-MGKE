import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, View, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Mon from '../DaysTimetable/Mon.js';
import Tuesday from '../DaysTimetable/Tuesday.js';

const Tab = createBottomTabNavigator();


// function TimeTableDaysTabs() {
//     return (
//       <Tab.Navigator tabBarOptions={{ showLabel: false }}>
//         <Tab.Screen 
//           name="Mon"
//           component={Mon}
//           options={{
//             headerShown: false,
//             tabBarStyle: {
//               backgroundColor: "grey",
//               position: "absolute",
//               bottom: 28,
//               right: 20,
//               left: 20,
//               borderRadius: 14,
//               borderTopWidth: 0,
//               height: 60,
//               shadowColor: "#000",
//               shadowOpacity: 0.15,
//               shadowOffset: {
//                 top: 0,
//               },
//             },
//             tabBarIcon: ({ focused }) => (
//               <View
//                 style={{
//                   position: "absolute",
//                   top: "50%",
//                 }}
//               >
//                 <Feather
//                   name="home"
//                   size={24}
//                   color={focused ? "#F58B61" : "#CECECE"}
//                 />
//               </View>
//             ),
//           }}
//         ></Tab.Screen>
//         <Tab.Screen 
//           name="Tuesday"
//           component={Tuesday}
//           options={{
//             headerShown: false,
//             tabBarStyle: {
//               backgroundColor: "#FFFFFF",
//               position: "absolute",
//               bottom: 28,
//               right: 20,
//               left: 20,
//               borderRadius: 14,
//               borderTopWidth: 0,
//               height: 60,
//               shadowColor: "#000",
//               shadowOpacity: 0.15,
//               shadowOffset: {
//                 top: 0,
//               },
//             },
//             tabBarIcon: ({ focused }) => (
//               <View
//                 style={{
//                   position: "absolute",
//                   top: "50%",
//                 }}
//               >
//                 <Feather
//                   name="home"
//                   size={24}
//                   color={focused ? "#F58B61" : "#CECECE"}
//                 />
//               </View>
//             ),
//           }}
//         ></Tab.Screen>
//       </Tab.Navigator>
//     );
//   }

export default function Settings({ navigation }) {

    const loadSceneProfile = () => {
        navigation.navigate('Main')
    }

    function DateNow() {
        let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
        let today = new Date();
        let nd = ''
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0');
        let yyyy = today.getFullYear();
        for(let i = 0; i < 7; i++) {
            if(today.getDay() == i){
                nd = days[i]
            }
        }
        today = nd + ', ' + dd + '.' + mm + '.' + yyyy;
        return today
    }

    return (
        <View style={{height: '100%', backgroundColor: '#FFFFFF'}}>
            <View style={styles.headerContainer}> 
                <View style={{width: 230, height: 47}}>
                    <Text style={{fontFamily: 'rub-semibold', fontSize: 20}}>
                        Расписание занятий
                    </Text>
                    <Text style={{color: '#F8AE90', fontFamily: 'rub-reg', fontSize: 15, marginTop: 4}}> 
                        {DateNow()}
                    </Text>
                    <TouchableOpacity activeOpacity={0.4} style={{width: 44, height: 44, backgroundColor: '#F8AE90', borderRadius: '50%', position:'absolute', left: 290, top: 4, alignItems:'center'}} onPress={loadSceneProfile} >
                    <Ionicons name="arrow-back-outline" size={30} color="white" style={{marginTop: 6, marginLeft: 2}} />
                    </TouchableOpacity>
                </View>
                <View style={{width: 350, height: 2, backgroundColor: '#F8AE90', borderRadius: '50%', marginTop: 20}}></View>
            </View>

            <NavigationContainer independent={true}>
                <Tab.Navigator>
                    <Tab.Screen
                        name="Mon"
                        component={Mon}
                        options={{ headerShown: false }}
                    ></Tab.Screen>
                    <Tab.Screen
                        name="Tuesday"
                        component={Tuesday}
                        options={{ headerShown: false }}
                    ></Tab.Screen>
                </Tab.Navigator>
            </NavigationContainer>
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
});