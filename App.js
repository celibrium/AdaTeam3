import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import home from '../AdaTeam3/images/home.jpg';
import camera from '../AdaTeam3/images/camera.jpg';
import save from '../AdaTeam3/images/save.jpg';
import pic1 from '../AdaTeam3/images/pic1.jpg';
import pic2 from '../AdaTeam3/images/pic2.jpg';
import pic3 from '../AdaTeam3/images/pic3.jpg';
import pic4 from '../AdaTeam3/images/pic4.jpg';
import pic5 from '../AdaTeam3/images/pic5.jpg';
import pic6 from '../AdaTeam3/images/pic6.jpg';
import pic7 from '../AdaTeam3/images/pic7.jpg';
import pic8 from '../AdaTeam3/images/pic8.jpg';
import search from '../AdaTeam3/images/search.jpg';

export default function App() {
  return (
  <View style = {styles.container}>
    <View> 
      <View style={styles.rectangle}></View>
      <Text style={styles.t1}>search</Text>
      <View style={styles.secondRectangle}></View>
      <Text style={styles.banner}>featured banner</Text>
      <Text style={styles.recommended}>Recommended for you</Text>
      <Text style={styles.popular}>Popular right now</Text>
      <View style={styles.menu}></View>


      <Image
        source={home}
        style={styles.home}
        />
      <Image
        source={camera}
        style={styles.camera}
        />
      <Image
        source={save}
        style={styles.save}
        />
      <ScrollView style={styles.scroll1} horizontal = {true}>
      <Image
        source={pic1}
        style={styles.pic1}
        />
      <Image
        source={pic2}
        style={styles.pic2}
        />
      <Image
        source={pic3}
        style={styles.pic3}
        />
        <Image
        source={pic4}
        style={styles.pic4}
        />
      </ScrollView>
      <ScrollView style={styles.scroll2} horizontal = {true}>
      <Image
        source={pic5}
        style={styles.pic5}
        />
      <Image
        source={pic6}
        style={styles.pic6}
        />
      <Image
        source={pic7}
        style={styles.pic7}
        />
        <Image
        source={pic8}
        style={styles.pic8}
        />
      </ScrollView>
      <Image
      source={search}
      style={styles.search}
      />
      <StatusBar style="auto" />
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBE2DD',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rectangle: {
    height: 30,
    width: 270,
    backgroundColor: '#664739',
    borderRadius: 16,
    position: 'relative',
    left: 50,
    top: 25
  },
  t1: {
    color: '#EBE2DD',
    position : 'relative',
    right: -90,
    bottom: -1
    
    
  },
  secondRectangle: {
    height: 150,
    width: 375,
    backgroundColor: '#D9D9D9',
    position: 'relative',
    bottom: -50
  },
  banner: {
    color: '#000000',
    position: 'relative',
    top: -40,
    right: -130
  },
  recommended: {
    color: '#000000',
    position: 'relative',
    right: -25,
    bottom: -65,
    fontSize: 16
  },
  popular: {
    color: '#000000',
    position: 'relative',
    bottom: -207,
    right: -25,
    fontSize: 16,
  },
  menu: {
    height: 80,
    width: 375,
    backgroundColor: '#664739',
    position: 'relative',
    top: 335,
    zIndex: 25,
  },
  home: {
    position: 'relative',
    bottom: -270,
    right: -50,
    zIndex: 26,
  },
  camera: {
    position: 'relative',
    bottom: -223,
    right: -155,
    zIndex: 26,

  },
  save: {
    position: 'relative',
    bottom: -176,
    right: -270,
    zIndex: 26,
    
  },
  search: {
    position: 'relative',
    left: 57,
    bottom: 615

  }, 
  scroll1: {
    position : 'relative',
    top: -155,
    resizeMode: 'contain',
  },
  pic4: {
    position: 'relative',
    right: -24
    
  },
  pic3: {
    position: 'relative',
    right: -16
  },
  pic2: {
    position: 'relative',
    right: -8
  },
  scroll2: {
    position: 'relative',
    top: -80   
  },
  pic8: {
    position: 'relative',
    right: -24
    
  },
  pic7: {
    position: 'relative',
    right: -16
  },
  pic6: {
    position: 'relative',
    right: -8
  },


  
});
