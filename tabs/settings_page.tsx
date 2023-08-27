import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, } from 'react-native';
import {  useFonts, BeVietnamPro_700Bold } from '@expo-google-fonts/be-vietnam-pro';


export default function SettingsPage() {

  let [fontsLoaded] = useFonts({
    BeVietnamPro_700Bold
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{backgroundColor: '#1e1e1e'}}>
      <View style={{ height: 400 }}></View>
        <View style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Text style={styles.container}>Settings Tab Appearance</Text>
          <View style={{ height: 40 }}></View>
          <Text style={styles.container}>Dark Mode Coming Soon...</Text>
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
      fontFamily: 'BeVietnamPro_700Bold',
      fontWeight: 'bold',
      fontSize: 30,
      color: 'white'
    },
  });
  