import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image } from 'react-native';
import { Spacer } from "@react-native-material/core";
import { TouchableOpacity } from 'react-native-gesture-handler';
import {  useFonts, BeVietnamPro_600SemiBold, BeVietnamPro_700Bold } from '@expo-google-fonts/be-vietnam-pro';


export default function Notes() {

  let [fontsLoaded] = useFonts({
    BeVietnamPro_600SemiBold,
    BeVietnamPro_700Bold
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ backgroundColor: '#E7E5E5', }}>
        <View style={{ height: 20 }} />
        <Text style={styles.container}>Demonstrate your proficiency in data processing system design and development, and your ability to build a machine learning model on Google Cloud Platform. Professional Data Engineer collects, transforms and visualizes data to support data-driven decision making.</Text>
        <View style={{ height: 20 }} />
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.title}>Overview</Text>
          <Spacer />
          <Text style={styles.itemCount}>67 items</Text>
        </View>
        <View style={{ height: 20 }} />
        <View style={styles.overContainer}>
          <TouchableOpacity style={{width: 350}}>
            <View style={{ flexDirection: 'row' }}>
              <Image source={require('../../assets/icons/play.png')} />
              <View style={{ width: 10 }} />
              <Text style={styles.containerText}>50 videos</Text>
              <Spacer />
              <Image source={require('../../assets/icons/arrow-right.png')} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{width: 350}}>
            <View style={{ flexDirection: 'row' }}>
              <Image source={require('../../assets/icons/memo-check.png')} />
              <View style={{ width: 10 }} />
              <Text style={styles.containerText}>2 docs</Text>
              <Spacer />
              <Image source={require('../../assets/icons/arrow-right.png')} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{width: 350}}>
            <View style={{ flexDirection: 'row' }}>
              <Image source={require('../../assets/icons/file-sign.png')} />
              <View style={{ width: 10 }} />
              <Text style={styles.containerText}>15 notes</Text>
              <Spacer />
              <Image source={require('../../assets/icons/arrow-right.png')} />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appbar: {
    elevation: 0,
    backgroundColor: 'transparent',
  },
  container: {
    flex: 1,
    fontFamily: 'BeVietnamPro_600SemiBold',
    fontSize: 18,
    opacity: 0.7,
    color: '#374957'
  },
  title: {
    fontFamily: 'BeVietnamPro_700Bold',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#374957',
  },
  itemCount: {
    fontFamily: 'BeVietnamPro_600SemiBold',
    fontSize: 15,
    opacity: 0.7,
    color: '#374957',
  },
  overContainer: {
    height: 115,
    borderColor: '#3AE374',
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: 'white',
    padding: 16,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  containerText: {
    fontFamily: 'BeVietnamPro_600SemiBold',
    fontSize: 15,
    color: '#374957',
  }
});
