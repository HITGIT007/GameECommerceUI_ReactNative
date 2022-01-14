import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {windowWidth} from '../utils/Dimensions';
const ListItem = () => {
  return (
    <View style={styles.v1}>
      <View style={styles.v2}>
        <Image
          source={require('../assets/images/spiderman.webp')}
          style={styles.img1}
        />
        <View>
          <Text style={styles.t1}>Marvel</Text>
          <Text style={styles.t2}>Spider-Man</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.to1}>
        <Text style={styles.txt1}>Play</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  v1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  v2: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  img1: {
    width: '55',
    height: '55',
    borderRadius: 10,
    marginRight: 8,
  },
  t1: {
    color: 'black',

    fontSize: 14,
  },
  t2: {
    color: 'black',

    fontSize: 14,
    textTransform: 'uppercase',
  },
  to1: {
    backgroundColor: '#0aada8',
    padding: 10,
    width: 100,
    borderRadius: 10,
  },
  txt1: {
    color: '#fff',
    textAlign: 'center',

    fontSize: 14,
  },
});
