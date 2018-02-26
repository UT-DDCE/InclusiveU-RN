import React, {Component} from 'react';
import { AppRegistry, StyleSheet, View } from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

export default class MapExample extends Component{
  render(){
    return(
      <View style={styles.container}>



        <MapView provider={PROVIDER_GOOGLE} style={styles.mapContainer}
          initialRegion={{
            latitude: 30.284884,
            longitude:  -97.733466,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
        <View style={styles.topBar}>
          <View style = {styles.hamburger}>
          </View>
        </View>
{/*          <View style={styles.topBar}>
            <View style = {styles.hamburger}>
            </View>
          </View>*/}



      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
  },
  topBar:{
    flex:1/10,
    flexDirection:'row',
    height: '8%',
    width:'100%',
    backgroundColor: '#BF5700',
    marginTop:'4%',
  },
  hamburger:{
    flex:1/10,
    marginLeft:'5%',
    marginTop:'5%',
    marginBottom: '5%',
    backgroundColor: 'white',
  },
  mapContainer:{
    flex:1,
  },
});
AppRegistry.registerComponent('MapExample', () => MapExample);
