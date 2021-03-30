import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native';
import { Paragraph } from '../index'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faVenus, faCalendar, faStickyNote, faMapMarker, faInfo } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
const Card = ({ post, ...props }) => (
  <View style={styles.container}>
      <View style={{flexDirection:"row"}}>
          <View style={{flex:1, flexDirection:"column"}}>
            <View style={{flex:1, marginTop:hp('1%'), flexDirection:'row'}}>
              <FontAwesomeIcon icon={ faCalendar } style={{flex:1}} />
              <View style={{flex:4, marginLeft:wp('1%')}}>
                <Text style={styles.name}>
                  {moment(parseInt(post.datePosted)*1000).format('ddd MMMM Do, YYYY HH:mm:ss')}
                </Text>
              </View>
            </View>
            <View style={{flex:1, marginTop:hp('4%')}}>
              <View style={{flexDirection:'row'}}>
                <FontAwesomeIcon icon={ faVenus } style={{flex:1}} />
                <View style={{flex:4, marginLeft:wp('1%')}}>
                  <Text style={styles.name}>
                    {post.gender}
                  </Text>
                </View>
              </View>
            </View>
            <View style={{flex:1, marginTop:hp('3%')}}>
              <View style={{flexDirection:'row'}}>
                <FontAwesomeIcon icon={ faStickyNote } style={{flex:1}} />
                <View style={{flex:4, marginLeft:wp('1%')}}>
                  <Text style={styles.name}>
                    {post.notes}
                  </Text>
                </View>
              </View>
            </View>
            <View style={{flex:1, marginTop:hp('3%')}}>
              <View style={{flexDirection:'row'}}>
                <FontAwesomeIcon icon={ faMapMarker } style={{flex:1}} />
                <View style={{flex:4, marginLeft:wp('1%')}}>
                  <Text style={styles.name}>
                    5 KM
                  </Text>
                </View>
              </View>
            </View>
            <View style={{flex:1, marginTop:hp('3%')}}>
              <View style={{flexDirection:'row'}}>
                <FontAwesomeIcon icon={ faInfo } style={{flex:1}} />
                <View style={{flex:4, marginLeft:wp('1%')}}>
                  <Text style={styles.name}>
                    Type Of Help
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{flex:1, flexDirection:"column"}}>
            <View style={{flex:1, alignItems:"flex-end"}}>
              <Image source={{uri: post.photo}} style={styles.image} />
            </View> 
            <View style={{flex:1, alignItems:"flex-end", marginBottom:hp('-5%'), marginRight:hp('2%')}}>
              <Image source={require("../../assets/whatsapp.png")} style={styles.whatsAppImage} />
            </View> 
          </View>
      </View>
  </View>
)

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      borderColor: '#560CCE',
      padding:'2%',
      color: '#FFFFFF',
      shadowColor: 'black',
      shadowOpacity: 0.9,
      elevation: 6,
      marginTop: hp('2%'),
      width: wp('90%'),
      height:hp('20%')
    },
    paragraph: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      padding: 20
    },
    name: {
      color: '#560CCE',
      fontWeight: 'bold'
    },
    whatsAppImage: {
      flex: 1,
      resizeMode:"contain",
      width: 30,
      height:null,
      borderRadius: 40
    },
    image: {
      width: 80,
      height: 80,
      borderRadius: 80 / 2,
      overflow: "hidden",
      borderWidth: 1,
      borderColor: "#560CCE",
    }
  });
  

export default Card
