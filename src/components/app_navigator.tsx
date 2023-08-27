import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import IntroPage from '../../pages/intro_page';
import DetailPage from '../../pages/detail_page';
import Router from './router';

const { Navigator, Screen } = createStackNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }} initialRouteName='IntroPage'>
                <Screen name='Intro' component={IntroPage}></Screen>
                <Screen name='Router' component={Router}></Screen>
                <Screen name='Detail' component={DetailPage}></Screen>
            </Navigator>
        </NavigationContainer>
    );
}