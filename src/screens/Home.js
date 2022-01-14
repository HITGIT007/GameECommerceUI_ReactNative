import React, {useState} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import Carousel from 'react-native-snap-carousel';
import Feather from 'react-native-vector-icons/Feather';
import BannerSlider from '../components/BannerSlider';
import {windowWidth} from '../utils/Dimensions'
import {freeGames, paidGames, sliderData} from '../model/data';
import CustomSwitch from '../components/CustomSwitch';
import ListItem from '../components/ListItem';
const Home = () => {
  const [gamesTab, setGamesTab] = useState(1);  
  const renderBanner = ({item, index}) => {
        return <BannerSlider data={item}/>
    }
    
    const onSelectSwitch = (value) => {
      setGamesTab(value);
  }
    
    
  return (
    <SafeAreaView style={styles.sfav}>
      <ScrollView style={{padding: 20}}>
        <View style={styles.v1}>
          <Text
            style={styles.t1}>
            Hello Prateek
          </Text>
          <ImageBackground
            source={require('../assets/images/user-profile.jpg')}
            style={{width: 35, height: 35}}
            imageStyle={{borderRadius: 25}}
          />
        </View>
        <View
          style={styles.v2}>
          <Feather
            name="search"
            size={45}
            color="#C6C6C6"
            style={{marginRight: 5}}
          />
          <TextInput style={{fontSize: 20}} placeholder="Search" />
        </View>
        <View
          style={styles.v3}>
          <Text style={styles.t2}>
            Upcoming Games
          </Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={{color: '#0aada8'}}>See all</Text>
          </TouchableOpacity>
        </View>
        <Carousel
          
          data={sliderData}
          renderItem={renderBanner}
          sliderWidth={windowWidth - 40}
          itemWidth={300}
          loop={true}
        />
        <View style={{marginVertical: 20}}>
          <CustomSwitch selectionMode={1} 
          option1="Free To Play"
          option2="Paid Games"
          onSelectSwitch={onSelectSwitch}/>

        </View>
        <ListItem/>
        
        {/* {gamesTab == 1 && <Text>Free Games</Text>}
        {gamesTab == 2 && <Text>Paid Games</Text>} */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  sfav: {
    flex: 1,
    backgroundColor: '#FFFF00',
  },
  v1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  t1:{
    fontSize: 20,
    color: '#AD40AF',
    fontFamily: 'BeVietnamPro-ExtraBoldItalic',
  },
  v2:{
    flexDirection: 'row',
    borderColor: '#C6C6C6',
    borderWidth: 1,
    borderRadius: 8,
  },
  v3:{
    marginVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  t2:{fontSize: 18, 
    fontWeight: 'bold', 
    color: 'black'}
});
//ScrollView renders all its react child components at once,
//but this has a performance downside.
//FlatList renders items lazily, when they are about to appear, and removes items that
//scroll way off screen to save memory and processing time.
