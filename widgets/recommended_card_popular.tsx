import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Spacer } from "@react-native-material/core";
import {  useFonts, BeVietnamPro_600SemiBold, BeVietnamPro_700Bold } from '@expo-google-fonts/be-vietnam-pro';

export default function RecommendedCardPopular() {

    let [fontsLoaded] = useFonts({
        BeVietnamPro_600SemiBold,
        BeVietnamPro_700Bold
      });
    
      if (!fontsLoaded) {
        return null;
      }

    return (
        <TouchableOpacity style={styles.button}>
            <View style={styles.main}>
                <View style={styles.leftBorder}></View>
                <View style={styles.container}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image
                            source={require('../assets/icons/bolt-fill.png')}
                        />
                        <View style={{ width: 5 }} />
                        <Text style={styles.category}>Popular</Text>
                    </View>
                    <View style={{ height: 10 }} />
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.courseName} numberOfLines={1}>Google Cloud - Professional Data Engineer</Text>
                        <Spacer />
                        <View style={styles.companyCon}></View>
                        <View style={{ width: 3 }} />
                        <Text style={styles.courseCount}>Google</Text>
                    </View>
                    <View style={{ height: 10 }} />
                    <View style={{ flexDirection: 'row' }}>
                        <Image
                            source={require('../assets/icons/star-2.png')}
                        />
                        <View style={{ width: 5 }} />
                        <Text style={styles.rate}>4.9</Text>
                        <Spacer />
                        <Text style={styles.rate}>700 review</Text>
                    </View>
                    <View style={{ height: 5 }} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            source={require('../assets/icons/time.png')}
                        />
                        <View style={{ width: 5 }} />
                        <Text style={styles.rate}>50 hour</Text> 
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            source={require('../assets/icons/comment-dots.png')}
                        />
                        <View style={{ width: 5 }} />
                        <Text style={styles.rate}>English</Text> 
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            source={require('../assets/icons/user-check.png')}
                        />
                        <View style={{ width: 5 }} />
                        <Text style={styles.rate}>7+</Text> 
                        </View>
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
        height: 150,
        elevation: 0,
        marginHorizontal: 16
    },
    leftBorder: {
        height: 150,
        width: 10,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        backgroundColor: '#7158E2',
    },
    container: {
        height: 150,
        width: 370,
        borderWidth: 2,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        padding: 16,
        borderColor: '#7158E2',
        backgroundColor: 'white'
    },
    category: {
        fontFamily: 'BeVietnamPro_700Bold',
        fontWeight: 'bold',
        fontSize: 15,
        color: '#7158E2'
    },
    rate: {
        fontFamily: 'BeVietnamPro_700Bold',
        fontWeight: 'bold',
        fontSize: 15,
        color: '#374957'
    },
    courseName: {
        fontFamily: 'BeVietnamPro_700Bold',
        fontWeight: 'bold',
        fontSize: 18,
        color: '#374957'
    },
    courseCount: {
        fontFamily: 'BeVietnamPro_600SemiBold',
        fontSize: 12,
        fontWeight: 'bold',
        color: 'black'
    },
    companyCon: {
        height: 15,
        width: 5,
        borderRadius: 10,
        backgroundColor: '#7158E2'
    }
});