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

export default function App() {
  return (
  <View style = {styles.container}>
    <View> 
      <View style={styles.rectangle}></View>
      <Text style={styles.search}>search</Text>
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
      <ScrollView horizontal = {true}>
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
      <ScrollView horizontal = {true}>
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
   
  },
  search: {
    color:'white',
    
  },
  secondRectangle: {
    height: 150,
    width: 360,
    backgroundColor: '#D9D9D9',
    
  },
  banner: {
    color: '#000000',
  },
  recommended: {
    color: '#000000'
  },
  popular: {
    color: '#000000'

  },
  menu: {
    height: 80,
    width: 375,
    backgroundColor: '#664739'
  },
  home: {
    position: 'relative',
    bottom: 50
  },
  camera: {

  },
  save: {
    
  }
  
});
