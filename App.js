import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import home from '../AdaTeam3/images/home.jpg';
import camera from '../AdaTeam3/images/camera.jpg';
import save from '../AdaTeam3/images/save.jpg';
import pic1 from '../AdaTeam3/images/pic1.jpg';
import pic2 from '../AdaTeam3/images/pic2.jpg';


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
    position: 'relative',
    top: -185,
    left: 45
  },
  search: {
    color:'#EBE2DD',
    position: 'relative',
    left: 80,
    bottom: 209
  },
  secondRectangle: {
    height: 150,
    width: 360,
    backgroundColor: '#D9D9D9',
    position: 'relative',
    bottom: 180
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
