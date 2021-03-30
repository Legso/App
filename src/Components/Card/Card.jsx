import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { theme } from '../../Utils/Theme/Theme';

const Card = ({ post, ...props }) => (
  <View style={styles.container}>
      <View style={{flexDirection:"row"}}>
          <View style={{flex:1, flexDirection:"column"}}>
            <View style={{flex:1}}>
              <Text>
                Date
              </Text>
            </View>
            <View style={{flex:1}}>
              <Text>
                Name
              </Text>
            </View> 
            <View style={{flex:1}}>
              <Text>
                Gender
              </Text>
            </View>
            <View style={{flex:1}}>
              <Text>
                Notes
              </Text>
            </View>
            <View style={{flex:1}}>
              <Text>
                Type of Help
              </Text>
            </View>
            <Text>
              Left Column
            </Text>
          </View>
          <View style={{flex:1, flexDirection:"column"}}>
            <View style={{flex:1}}>
              <Text>
                Distance
              </Text>
            </View>
            <View style={{flex:1}}>
              <Text>
                Whatsapp
              </Text>
            </View> 
          </View>
      </View>
  </View>
)

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#FFFFFF',
      borderColor: '#560CCE',
      padding:'2%',
      color: '#FFFFFF',
      shadowColor: 'black',
      shadowOpacity: 0.9,
      elevation: 6,
      margin: '4%',
      width:'130%',
      height:'30%'
    },
    paragraph: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      padding: 20
    },
  });
  

export default Card
