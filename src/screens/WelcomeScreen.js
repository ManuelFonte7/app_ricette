import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, Image } from 'react-native';
import tw from 'twrnc';


export default function WelcomeScreen(){
    return(
        <View style={tw`flex-1 justify-center items-center bg-amber-500`}>
            <StatusBar style='light' />

            {/* Logo */}
            <View style={tw`bg-white/20 rounded-full p-10`}>
                <View style={tw`bg-white/20 rounded-full p-8`}>
                    <Image source={require('../../assets/images/logo.png')} style={{width: 220, height: 220}}/>
                </View>
            </View>

            {/* Titolo */}
            <View style={tw`flex items-center mt-8`}>
                <Text style={tw`font-bold text-white text-5xl`}>
                    Ricette perfette
                </Text>
                <Text style={tw`font-medium text-white text-lg`}>
                    La tua ricetta in pochi click
                </Text>
            </View>
        </View>
    )
}