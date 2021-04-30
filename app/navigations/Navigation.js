import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";

import RestaurantsStack from "./RestaurantsStack";
import FavoritesStack from "./FavoritesStack";
import TopRestaurantsStack from "./TopRestaurantsStack";
import SearchStack from "./SearchStack";
import AccountStack from "./AccountStack";

import TabBar from "../components/TabBar";

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                tabBar={(props) => <TabBar {...props}/>}
                initialRouteName="restaurants"
                // tabBarOptions={{
                //     inactiveTintColor: "black",
                //     activeTintColor: "#7c9473",
                // }}
                // screenOptions={({route}) => ({
                //     tabBarIcon: ({ color }) => screenOptions(route, color),
                // })}
            >
                <Tab.Screen 
                    name="Search" 
                    component={SearchStack} 
                    options={{ title: "Buscar"}}
                    initialParams={{icon: "search"}} 
                />
                <Tab.Screen 
                    name="Favorites" 
                    component={FavoritesStack} 
                    options={{ title: "Favoritos"}} 
                    initialParams={{icon: "heart-outline"}} 
                />
                <Tab.Screen 
                    name="Home" 
                    component={RestaurantsStack} 
                    options={{ title: "Restaurantes"}} 
                    initialParams={{icon: "infinite"}} 
                />
                <Tab.Screen 
                    name="Top 5" 
                    component={TopRestaurantsStack} 
                    options={{ title: "Top 5"}}
                    initialParams={{icon: "ios-star-outline"}} 
                />
                <Tab.Screen 
                    name="Account" 
                    component={AccountStack} 
                    options={{ title: "Cuenta"}}
                    initialParams={{icon: "person-circle-outline"}}  
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

// function screenOptions(route, color) {
//     let iconName;

//     switch (route.name) {
//         case "search":
//             iconName =  "magnify"
//             break;
//         case "favorites":
//             iconName =  "heart-outline"
//             break;
//         case "restaurants":
//             iconName =  "compass-outline"
//             break;
//         case "top-restaurants":
//             iconName =  "star-outline"
//             break;
//         case "account":
//             iconName =  "account-circle-outline"
//             break;
//         default:
//             break;
//     }
//     return (
//         <Icon type="material-community" name={iconName} size={26} color={color} />
//     )
// }