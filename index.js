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
            <View style = {styles.smallRectangle}>
            </View>
            <View style = {styles.smallRectangle}>
            </View>
            <View style = {styles.smallRectangle}>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  topBar:{
    flexDirection:'row',
    flex: 1/10,
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 50,
    width: 350,
    backgroundColor: '#BF5700',
    marginTop:20,
    opacity: 0.9,
    borderRadius: 12,
  },
  hamburger:{
    height: 22.5,
    width: 30,
    left: 15,
    backgroundColor: 'white',
    borderRadius: 3,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 2,
  },
  smallRectangle:{
    height:4,
    width: 20,
    borderRadius: 2,
    backgroundColor: 'gray',
  },
  mapContainer:{
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});
AppRegistry.registerComponent('MapExample', () => MapExample);
