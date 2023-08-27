import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Spacer } from "@react-native-material/core";
import ProgressBar from 'react-native-progress-bar-horizontal';
import {  useFonts, BeVietnamPro_600SemiBold, BeVietnamPro_700Bold } from '@expo-google-fonts/be-vietnam-pro';

export default function ProgressCardGreen() {

    let [fontsLoaded] = useFonts({
        BeVietnamPro_600SemiBold,
        BeVietnamPro_700Bold
      });
    
      if (!fontsLoaded) {
        return null;
      }

    var progress = 70;

    return (
        <TouchableOpacity style={styles.button}>
            <View style={styles.main}>
                <View style={styles.leftBorder}></View>
                <View style={styles.container}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image
                            source={require('../assets/icons/magic-wand.png')}
                        />
                        <View style={{width: 5}} />
                        <Text style={styles.courseName}>UI/UX Design</Text>
                    </View>
                    <View style={{ height: 10 }} />
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.courseCount}>Course 7/10</Text>
                        <Spacer />
                        <View style={styles.companyCon}></View>
                        <View style={{ width: 3 }} />
                        <Text style={styles.courseCount}>Google</Text>
                    </View>
                    <View style={{ height: 10 }} />
                    <ProgressBar
                        progress={0.7}
                        fillColor="#3AE374"
                        unfilledColor="#E7E5E5"
                        borderWidth={0}
                        height={5}
                        duration={10}
                    />
                    <View style={{ height: 5 }} />
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.courseCount}>Completed</Text>
                        <Spacer />
                        <Text style={styles.courseCount}>%{progress}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        flexDirection: 'row',
    },
    button: {
        height: 110,
        width: 246,
        elevation: 0,
    },
    leftBorder: {
        height: 110,
        width: 10,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        backgroundColor: '#3AE374',
    },
    container: {
        height: 110,
        width: 235,
        borderWidth: 2,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        padding: 16,
        borderColor: '#3AE374',
        backgroundColor: 'white'
    },
    courseName: {
        fontFamily: 'BeVietnamPro_700Bold',
        fontWeight: 'bold',
        fontSize: 15,
        color: '#374957'
    },
    courseCount: {
        fontFamily: 'BeVietnamPro_600SemiBold',
        fontSize: 12,
        opacity: 0.5,
        color: 'black'
    },
    companyCon: {
        height: 15,
        width: 5,
        borderRadius: 10,
        backgroundColor: '#3AE374'
    }
});