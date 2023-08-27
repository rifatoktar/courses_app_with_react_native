import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const { Screen, Navigator } = createBottomTabNavigator();

import Home from '../../tabs/home_page';
import Courses from '../../tabs/courses_page';
import Completed from '../../tabs/completed_page'
import Setting from '../../tabs/settings_page';

const Router = () => {

    const { icon } = styles;

    return (
        <Navigator screenOptions={screenOptions}>
            <Screen name='Home' component={Home} options={{
                tabBarIcon: ({ focused }) => focused ? <Image style={icon} source={require('../../assets/icons/home-fill.png')} /> : <Image style={icon} source={require('../../assets/icons/home.png')} />
            }} />
            <Screen name='Courses' component={Courses} options={{
                tabBarIcon: ({ focused }) => focused ? <Image style={icon} source={require('../../assets/icons/book-fill.png')} /> : <Image style={icon} source={require('../../assets/icons/book.png')} />
            }} />
            <Screen name='Completed' component={Completed} options={{
                tabBarIcon: ({ focused }) => focused ? <Image style={icon} source={require('../../assets/icons/cap-fill.png')} /> : <Image style={icon} source={require('../../assets/icons/cap.png')} />
            }} />
            <Screen name='Setting' component={Setting} options={{
                tabBarIcon: ({ focused }) => focused ? <Image style={icon} source={require('../../assets/icons/settings-fill.png')} /> : <Image style={icon} source={require('../../assets/icons/settings.png')} />
            }} />
        </Navigator>
    );
}

const styles = {
    icon: {
        height: 24,
        width: 24,
    }
}

const screenOptions = {
    headerShown: false,
    tabBarShowLabel: false,
    tabBarHideOnKeyboard: true,
    tabBarStyle: {
        position: 'absolute',
        height: 70,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: '#5AE4A7'
    }
}

export default Router;