import React from 'react';
import { AppBar, IconButton } from '@react-native-material/core';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Spacer } from "@react-native-material/core";
import DetailTabView from '../widgets/detail_tab_view';
import {  useFonts, BeVietnamPro_600SemiBold, BeVietnamPro_700Bold } from '@expo-google-fonts/be-vietnam-pro';


export default function DetailPage({ navigation }) {

  let [fontsLoaded] = useFonts({
    BeVietnamPro_600SemiBold,
    BeVietnamPro_700Bold
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AppBar style={styles.appbar}
        transparent={true}
        leading={<IconButton style={styles.goBack}
          icon={<Image source={require('../assets/icons/arrow-left.png')} />}
          onPress={() => navigation.goBack('Router')}
        />}
        trailing={
          <TouchableOpacity style={styles.register}>
            <Text style={styles.registerText}>Register</Text>
          </TouchableOpacity>
        }
      />
      <ScrollView style={{ backgroundColor: '#E7E5E5' }}>
        <View style={{ height: 30 }} />
        <View style={styles.imageView}>
          <Image source={require('../assets/images/google.jpg')} style={styles.imageMain} />
        </View>
        <View style={{ height: 20 }} />
        <View style={{ flexDirection: 'row', marginHorizontal: 16 }}>
          <View style={styles.companyCon}></View>
          <View style={{ width: 3 }} />
          <Text style={styles.courseCount}>Google</Text>
          <Spacer />
          <Image
            source={require('../assets/icons/Star-2-green-2.png')}
          />
          <View style={{ width: 5 }} />
          <Text style={styles.courseCount}>4.9</Text>
        </View>
        <View style={{ height: 20 }} />
        <Text style={styles.courseName} numberOfLines={1}>Google Cloud - Professional Data Engineer</Text>
        <View style={{ height: 20 }} />
          <View style={{marginHorizontal: 16, height: 440}}>
          <DetailTabView />
          </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appbar: {
    elevation: 0,
    height: 100,
    backgroundColor: '#E7E5E5'
  },
  goBack: {
    height: 24,
    width: 24,
    top: 40,
    left: 16,
    borderRadius: 20,
  },
  register: {
    height: 40,
    width: 160,
    top: 40,
    left: 16,
    elevation: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  registerText: {
    fontFamily: 'BeVietnamPro_600SemiBold',
    fontSize: 24,
    color: '#374957',
  },
  imageView: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  imageMain: {
    left: 16,
    height: 180,
    width: 380,
    borderRadius: 10,
    borderColor: '#5AE4A7',
    borderWidth: 2
  },
  companyCon: {
    height: 20,
    width: 5,
    borderRadius: 10,
    backgroundColor: '#3AE374'
  },
  courseCount: {
    fontFamily: 'BeVietnamPro_600SemiBold',
    fontSize: 15,
    opacity: 0.5,
    color: 'black'
  },
  courseName: {
    left: 16,
    right: 16,
    fontFamily: 'BeVietnamPro_700Bold',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#374957'
  },
});

