import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useFonts, BeVietnamPro_700Bold } from '@expo-google-fonts/be-vietnam-pro';

interface IntroPageProps {
  navigation: any;
}

export default function IntroPage(props: IntroPageProps) {

  let [fontsLoaded] = useFonts({
    BeVietnamPro_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  const router = () => props.navigation.navigate('Router');

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.scrollView}>
        <View style={{ height: 150 }}></View>
        <View style={styles.imageView}>
          <Image source={require('../assets/images/intro.jpg')} style={styles.imageMain} />
        </View>
        <View style={{ height: 80 }}></View>
        <View style={styles.textPadding}>
          <Text style={styles.mainText}>
            Learn what you want with coursy
          </Text>
        </View>
        <View style={{ height: 30 }}></View>
        <View style={styles.textPadding}>
          <Text style={styles.subText}>
            Coursy be able to support for your learning journey.
          </Text>
        </View>
        <View style={{ height: 40 }}></View>
        <TouchableOpacity onPress={router} style={styles.button}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#E7E5E5',
  },
  appbar: {
    elevation: 0,
    backgroundColor: 'transparent',
  },
  imageView: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  imageMain: {
    marginHorizontal: 20,
    height: 360,
    width: 360,
    borderRadius: 10,
    borderColor: '#5AE4A7',
    borderWidth: 2
  },
  mainText: {
    fontFamily: 'BeVietnamPro_700Bold',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#374957',
  },
  textPadding: {
    marginHorizontal: 16,
  },
  subText: {
    fontFamily: 'BeVietnamPro_700Bold',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#374957',
    opacity: 0.5
  },
  button: {
    marginHorizontal: 16,
    elevation: 0,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#5AE4A7',
    marginTop: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'BeVietnamPro_700Bold',
    fontWeight: 'bold',
    fontSize: 15,
    color: '#E7E5E5',
  }
});

