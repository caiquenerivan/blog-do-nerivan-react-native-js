import { Tabs } from "expo-router";

import {MaterialIcons} from '@expo/vector-icons';

export default function TabRoutesLayout(){
    return(
        <Tabs screenOptions={{headerShown: false}}>
            <Tabs.Screen 
                name="home"
                options={{
                    title: "Home",
                    tabBarIcon: ({ size, color }) => (
                        <MaterialIcons name="home"  size={size} color={color}/>
                    )
                }}
            />
            <Tabs.Screen 
                name="pesquisar"
                options={{
                    title: "Pesquisar",
                    tabBarIcon: ({ size, color }) => (
                        <MaterialIcons name="search"  size={size} color={color}/>
                    )
                }}
            />
            <Tabs.Screen 
                name="profile"
                options={{
                    title: "Perfil",
                    tabBarIcon: ({ size, color }) => (
                        <MaterialIcons name="person"  size={size} color={color}/>
                    )
                }}
            />
            <Tabs.Screen 
                name="menu"
                options={{
                    title: "Menu",
                    tabBarIcon: ({ size, color }) => (
                        <MaterialIcons name="menu"  size={size} color={color}/>
                    )
                }}
            />
        </Tabs>
    )
}