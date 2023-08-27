import React from 'react';
import { AppBar, IconButton } from '@react-native-material/core';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
import { Spacer } from "@react-native-material/core";
import ProgressCardGreen from '../widgets/progress_card_green';
import ProgressCardRed from '../widgets/progress_card_red';
import RecommendedCardPopular from '../widgets/recommended_card_popular';
import RecommendedCardAdvance from '../widgets/recommenden_card_advance';
import {  useFonts, BeVietnamPro_700Bold, BeVietnamPro_500Medium  } from '@expo-google-fonts/be-vietnam-pro';

interface HomePageProps {
  navigation: any;
}

export default function HomePage(props: HomePageProps) {

  let [fontsLoaded] = useFonts({
    BeVietnamPro_700Bold,
    BeVietnamPro_500Medium
  });

  if (!fontsLoaded) {
    return null;
  }

  const detail = () => props.navigation.navigate('Detail');

  return (
    <SafeAreaView style={{ flex: 0.94 }}>
      <AppBar style={styles.appbar}
        transparent={true}
        leading={<TouchableOpacity onPress={detail}>
          <Image
            style={styles.avatar}
            source={{
              uri: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80',
            }}
          />
        </TouchableOpacity>
        }
        trailing={<IconButton style={styles.iButton}
          icon={props => <Image source={require('../assets/icons/bell-colored.png')} />}
          {...props} onPress={detail}
        />}
      />
      <ScrollView style={{ backgroundColor: '#E7E5E5' }} showsVerticalScrollIndicator={false}>
        <View style={{ height: 30 }}></View>
        <View style={{ height: 110, marginHorizontal: 16 }}>
          <View style={{ flexDirection: 'row' }}>
            <Image
              source={require('../assets/images/hand-wave.png')}
            />
            <View style={{ width: 10 }} />
            <Text style={styles.userName}>Melisa Frell</Text>
          </View>
          <View style={{ height: 10 }} />
          <Text style={styles.helloText}>
            Many courses are waiting for you
          </Text>
        </View>
        <View style={{ height: 20 }} />
        <View style={styles.searchBar}>
          <Image source={require('../assets/icons/search.png')} />
          <View style={{ width: 10 }} />
          <View style={{width: 300}}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search courses, tutors..."
            placeholderTextColor={'white'}
          />
          </View>
          <Spacer />
          <IconButton style={styles.searchButton}
            icon={props => <Image source={require('../assets/icons/settings-2.png')} />}
            {...props}
          />
        </View>
        <View style={{ height: 30 }} />
        <View style={{ left: 16 }}>
          <Text style={styles.title}>In progress</Text>
        </View>
        <View style={{ height: 20 }} />
        <SafeAreaView style={{ flex: 0.9 }}>
          <ScrollView style={{left: 16}} horizontal={true} showsHorizontalScrollIndicator={false} >
            <ProgressCardGreen />
            <View style={{width: 8}}/>
            <ProgressCardRed />
          </ScrollView>
        </SafeAreaView>
        <View style={{ height: 30 }} />
        <View style={{ left: 16 }}>
          <Text style={styles.title}>Courses</Text>
        </View>
        <View style={{ height: 20 }} />
        <View style={{ flexDirection: 'row', marginHorizontal: 16, justifyContent: 'space-between', alignItems: 'center' }}>
          <TouchableOpacity onPress={detail}>
            <View style={styles.coursesButtonAll}>
              <Image source={require('../assets/icons/flame.png')} />
              <View style={{ width: 5 }} />
              <Text style={styles.coursesTitle}>All topics</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={detail}>
            <View style={styles.coursesButtonPop}>
              <Image source={require('../assets/icons/bolt.png')} />
              <View style={{ width: 5 }} />
              <Text style={styles.coursesTitle}>Popular</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ height: 20 }} />
        <View style={{ flexDirection: 'row', marginHorizontal: 16, justifyContent: 'space-between', alignItems: 'center' }}>
          <TouchableOpacity onPress={detail}>
            <View style={styles.coursesButtonNew}>
              <Image source={require('../assets/icons/star.png')} />
              <View style={{ width: 5 }} />
              <Text style={styles.coursesTitle}>Newest</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={detail}>
            <View style={styles.coursesButtonAd}>
              <Image source={require('../assets/icons/megaphone.png')} />
              <View style={{ width: 5 }} />
              <Text style={styles.coursesTitle}>Advance</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ height: 30 }} />
        <View style={{ left: 16 }}>
          <Text style={styles.title}>Recommended</Text>
        </View>
        <View style={{ height: 20 }} />
        <View style={{ flex: 1 }}>
          <ScrollView style={{ flex: 1 }}>
            <RecommendedCardPopular />
            <View style={{ height: 8 }} />
            <RecommendedCardAdvance />
          </ScrollView>
        </View>
        <View style={{ height: 20 }} />
      </ScrollView>
      <View style={{ height: 20 }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appbar: {
    elevation: 0,
    height: 100,
    backgroundColor: '#E7E5E5'
  },
  avatar: {
    height: 40,
    width: 40,
    top: 40,
    left: 16,
    borderRadius: 20,
  },
  iButton: {
    top: 40,
    right: 16,
    height: 24,
    width: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userName: {
    fontFamily: 'BeVietnamPro_700Bold',
    fontSize: 15,
    fontWeight: 'bold',
    color: '#374957',
  },
  helloText: {
    fontFamily: 'BeVietnamPro_700Bold',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#374957',
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 50,
    marginHorizontal: 16,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: '#5AE4A7',
  },
  searchInput: {
    height: 40,
    margin: 12,
    fontFamily: 'BeVietnamPro_500Medium',
    fontWeight: '500',
    fontSize: 15,
    color: 'white',
  },
  searchButton: {
    height: 24,
    width: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'BeVietnamPro_700Bold',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#374957',
  },
  coursesButtonAll: {
    height: 50,
    width: 170,
    elevation: 0,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#FFB8B8',
  },
  coursesButtonPop: {
    height: 50,
    width: 170,
    elevation: 0,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#7158E2',
  },
  coursesButtonNew: {
    height: 50,
    width: 170,
    elevation: 0,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#C56CF0',
  },
  coursesButtonAd: {
    height: 50,
    width: 170,
    elevation: 0,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#218C74',
  },
  coursesTitle: {
    fontFamily: 'BeVietnamPro_700Bold',
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  }
});
