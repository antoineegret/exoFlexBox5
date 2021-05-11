import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.containerPapa}>


        <View style={styles.containerEnfant1}>
          <View style={styles.containerPetitEnfant1}>          
          </View>
          <View style={styles.containerPetitEnfant2}>
          </View>
          <View style={styles.containerPetitEnfant3}>
          </View>         
        </View>


        <View style={styles.containerEnfant2}>
          <View style={styles.containerPetitEnfant4}>
          </View>
          <View style={styles.containerPetitEnfant5}>
          </View>
        </View>


        <View style={styles.containerEnfant3}>
          <View style={styles.containerPetitEnfant6}>
          </View>
          <View style={styles.containerPetitEnfant7}>
          </View>
        </View>


      </View>

      <View style={styles.containerMama}>

      </View>
      
   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerPapa: {
    flex:1,
    flexDirection:'row',
    
  },
  containerMama: {
    flex: 1,
    backgroundColor:'grey',
  },
  containerEnfant1: {
    flex:4,
    
    
  },
  containerEnfant2: {
    flex:1,
    flexDirection:'row',
    
    
  },
  containerEnfant3: {
    flex:1,
    
  },
  containerPetitEnfant1: {
    flex:3,
    backgroundColor:'purple',
  },
  containerPetitEnfant2: {
    flex:1,
    backgroundColor:'yellow',
  },
  containerPetitEnfant3: {
    flex:1,
    backgroundColor:'pink',
  },
  containerPetitEnfant4: {
    flex:2,
    backgroundColor:'red',
  },
  containerPetitEnfant5:{
    flex:1,
    backgroundColor:'blue',
  },
  containerPetitEnfant6:{
    flex:2,
    backgroundColor:'aqua',
  },
  containerPetitEnfant7:{
    flex:1,
    backgroundColor:'deeppink',
  },

});
