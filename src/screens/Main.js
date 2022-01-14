import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import GamingImg from '../assets/gaming.svg';
import {useNavigation} from '@react-navigation/native';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  //The TouchableOpacity wrapper is used to reduce the opacity of button.
  //It allows background to be seen while the user press down.
  //The opacity of button will be controlled by wrapping the children
  //in an Animation.
} from 'react-native';
const Main = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safearr}>
      <Text style={styles.txt}>Game On!!</Text>
      <Icon name="heart-outline" size={30} color="red" />
      <View style={styles.svgimg}>
        <GamingImg
          width={300}
          height={300}
          style={{transform: [{rotate: '-15deg'}]}}
        />
      </View>

      <TouchableOpacity
        style={styles.touch}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.txt1}>Let's Begin</Text>
        <MaterialIcons name="arrow-forward-ios" size={22} color="#FFFF00" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safearr: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFF00',
  },
  txt: {
    fontSize: 30,
    color: '#20315f',
    marginTop: 20,
    fontFamily: 'DancingScript-Bold',
  },
  touch: {
    marginBottom: 50,
    backgroundColor: '#AD40AF',
    padding: 20,
    width: '90%',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txt1: {
    fontSize: 18,
    color: '#FFFF00',
    fontFamily: 'BeVietnamPro-ExtraBoldItalic',
  },
  svgimg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Main;
