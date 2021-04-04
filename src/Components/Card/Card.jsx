import React from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { firebaseDatabase } from '../../../environment/config';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faVenus, faCalendar, faStickyNote, faMapMarker, faInfo, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { postStatus } from '../../Utils/Constants/enums';
import * as Linking from 'expo-linking';

import moment from 'moment';
let onClick = (postId) => {
  firebaseDatabase.ref('post').child(postId).set({ status: postStatus.inactive})
  console.log("Clicked", postId)
}
let openInWhatsapp = (phoneNumber) => {
  Linking.openURL('whatsapp://send?text=hello&phone='+phoneNumber);
}
const Card = ({ post, owner, ...props }) => (
  <View style={styles.container}>
      {owner && 
        <TouchableOpacity style={styles.deactivate} onPress={() => {onClick(post.postId)}} >
          <FontAwesomeIcon icon={ faTimesCircle } style={{flex:1}} size={25} />
        </TouchableOpacity>
      }
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
            <View style={{flex:1, marginTop:hp(1), alignItems:"flex-end"}}>
              <Image source={{uri: post.photo}} style={styles.image} />
            </View> 
            <TouchableOpacity onPress={() => openInWhatsapp(post.phoneNumber)} style={{flex:1, alignItems:"flex-end", marginBottom:hp('-5%'), marginRight:hp('2%')}}>
              <Image source={require("../../assets/whatsapp.png")} style={styles.whatsAppImage} />
            </TouchableOpacity> 
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
    },
    deactivate: {
      ...StyleSheet.absoluteFillObject,
      alignItems: 'flex-end',
      marginTop: -hp(1),
      marginRight: wp(1),
    }
  });
  

export default Card
