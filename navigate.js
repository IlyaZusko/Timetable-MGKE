import React, { useRef, useState } from "react";
import Main from "./components/Main.js";
import Settings from "./components/Settings.js";
import Calendar from "./components/Calendar.js";
import News from "./components/news.js";
import Edit from "./profileComponents/edit.js";
import GroupTimetable from "./mainComponents/groupTimetable.js"
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Context } from "./Contexts/context.js";

// import Mon from './DaysTimetable/Mon.js';
// import Tue from './DaysTimetable/Tue.js';

import { Feather } from "@expo/vector-icons";
import { Dimensions } from "react-native";

const Tab = createBottomTabNavigator();
const secondTab = createBottomTabNavigator();
const Stack = createStackNavigator();

// function TimeTableDaysTabs() {
//   return (
//     <Tab.Navigator tabBarOptions={{ showLabel: false }}>
//       <Tab.Screen 
//         name="Mon"
//         component={Mon}
//         options={{
//           headerShown: false,
//           tabBarStyle: {
//             backgroundColor: "grey",
//             position: "absolute",
//             bottom: 28,
//             right: 20,
//             left: 20,
//             borderRadius: 14,
//             borderTopWidth: 0,
//             height: 60,
//             shadowColor: "#000",
//             shadowOpacity: 0.15,
//             shadowOffset: {
//               top: 0,
//             },
//           },
//           tabBarIcon: ({ focused }) => (
//             <View
//               style={{
//                 position: "absolute",
//                 top: "50%",
//               }}
//             >
//               <Feather
//                 name="home"
//                 size={24}
//                 color={focused ? "#F58B61" : "#CECECE"}
//               />
//             </View>
//           ),
//         }}
//       ></Tab.Screen>
//       {/* <Tab.Screen 
//         name="Tue"
//         component={Tue}
//         options={{
//           headerShown: false,
//           tabBarStyle: {
//             backgroundColor: "#FFFFFF",
//             position: "absolute",
//             bottom: 28,
//             right: 20,
//             left: 20,
//             borderRadius: 14,
//             borderTopWidth: 0,
//             height: 60,
//             shadowColor: "#000",
//             shadowOpacity: 0.15,
//             shadowOffset: {
//               top: 0,
//             },
//           },
//           tabBarIcon: ({ focused }) => (
//             <View
//               style={{
//                 position: "absolute",
//                 top: "50%",
//               }}
//             >
//               <Feather
//                 name="home"
//                 size={24}
//                 color={focused ? "#F58B61" : "#CECECE"}
//               />
//             </View>
//           ),
//         }}
//       ></Tab.Screen> */}
//     </Tab.Navigator>
//   );
// }

function MainScreenWithTabs() {
  return (
    <Tab.Navigator tabBarOptions={{ showLabel: false }}>
      {/* --------------------Главное меню---------------------- */}
      <Tab.Screen
        name="Main"
        component={Main}
        options={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "#FFFFFF",
            position: "absolute",
            bottom: 28,
            right: 20,
            left: 20,
            borderRadius: 14,
            borderTopWidth: 0,
            height: 60,
            shadowColor: "#000",
            shadowOpacity: 0.15,
            shadowOffset: {
              top: 0,
            },
          },
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                position: "absolute",
                top: "50%",
              }}
            >
              <Feather
                name="home"
                size={24}
                color={focused ? "#F58B61" : "#CECECE"}
              />
            </View>
          ),
        }}
        // listeners={({ navigation, route }) => ({
        //   tabPress: (e) => {
        //     Animated.spring(tabOffSetValue, {
        //       toValue: 0,
        //       useNativeDriver: true,
        //     }).start();
        //   },
        // })}
      ></Tab.Screen>

      {/* --------------------Главное меню---------------------- */}
      <Tab.Screen
        name="News"
        component={News}
        options={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "#FFFFFF",
            position: "absolute",
            bottom: 28,
            right: 20,
            left: 20,
            borderRadius: 14,
            borderTopWidth: 0,
            height: 60,
            shadowColor: "#000",
            shadowOpacity: 0.15,
            shadowOffset: {
              top: 0,
            },
          },
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                position: "absolute",
                top: "50%",
              }}
            >
              <Feather
                name="mail"
                size={24}
                color={focused ? "#F58B61" : "#CECECE"}
              />
            </View>
          ),
        }}
        // listeners={({ navigation, route }) => ({
        //   tabPress: (e) => {
        //     Animated.spring(tabOffSetValue, {
        //       toValue: getWidth(),
        //       useNativeDriver: true,
        //     }).start();
        //   },
        // })}
      ></Tab.Screen>

      {/* --------------------Главное меню---------------------- */}
      <Tab.Screen
        name="Calendar"
        component={Calendar}
        options={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "#FFFFFF",
            position: "absolute",
            bottom: 28,
            right: 20,
            left: 20,
            borderRadius: 14,
            borderTopWidth: 0,
            height: 60,
            shadowColor: "#000",
            shadowOpacity: 0.15,
            shadowOffset: {
              top: 0,
            },
          },
          tabBarIcon: ({ focused }) => (
            <View style={{ position: "absolute", top: "50%" }}>
              <Feather
                name="calendar"
                size={24}
                color={focused ? "#F58B61" : "#CECECE"}
              />
            </View>
          ),
        }}
        // listeners={({ navigation, route }) => ({
        //   tabPress: (e) => {
        //     Animated.spring(tabOffSetValue, {
        //       toValue: getWidth() * 2,
        //       useNativeDriver: true,
        //     }).start();
        //   },
        // })}
      ></Tab.Screen>

      {/* --------------------Главное меню---------------------- */}
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "#FFFFFF",
            position: "absolute",
            bottom: 28,
            right: 20,
            left: 20,
            borderRadius: 14,
            borderTopWidth: 0,
            height: 60,
            shadowColor: "#000",
            shadowOpacity: 0.15,
            shadowOffset: {
              top: 0,
            },
          },
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                position: "absolute",
                top: "45%",
              }}
            >
              <Feather
                name="user"
                size={25}
                color={focused ? "#F58B61" : "#CECECE"}
              />
            </View>
          ),
        }}
        // listeners={({ navigation, route }) => ({
        //   tabPress: (e) => {
        //     Animated.spring(tabOffSetValue, {
        //       toValue: getWidth() * 3,
        //       useNativeDriver: true,
        //     }).start();
        //   },
        // })}
      ></Tab.Screen>
    </Tab.Navigator>
  );
}

export default function Navigate() {
  //   const tabOffSetValue = useRef(new Animated.Value(0)).current;
    const [context, setContext] = useState('')
  return (
    <Context.Provider value={[context, setContext]}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MainScreenWithTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="GroupTimetable"
          component={GroupTimetable}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Edit"
          component={Edit}
          options={{ headerShown: false }}
        />
        
      </Stack.Navigator>
      


      {/* <Animated.View
        style={{
          width: getWidth() - 35,
          height: 2,
          backgroundColor: "#F58B61",
          position: "absolute",
          bottom: 86,
          left: 40,
          borderRadius: "50%",
          transform: [{ translateX: tabOffSetValue }],
        }}
      ></Animated.View> */}
    </NavigationContainer>
    </Context.Provider>
  );

  // function getWidth() {
  //   let width = Dimensions.get("window").width;
  //   width = width - 42;

  //   return width / 4;
  // }
}
