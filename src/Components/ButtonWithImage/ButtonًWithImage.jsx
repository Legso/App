import React from 'react'
import { Image, StyleSheet, View, Text } from 'react-native'
import AwesomeButton from 'react-native-really-awesome-button'
import { theme } from '../../Utils/Theme/Theme';
import GoogleImage from '../../../assets/google1.png'

const Button = ({ mode, style, color, width, text, image, ...props }) => (
  <AwesomeButton
    width={ width ? width : 120 }
    mode={mode}
    backgroundColor={ color ? color : theme.colors.primary}
    color={"000"}
    borderColor={"#000000"}
    {...props}
  >
    <View style={{flexDirection:"row", }}>
      { image ? <Image source={image}   style={{flex:1, resizeMode:"contain", marginLeft:"5%"}} /> : null}
      <Text style={{flex:4}}> Test Text</Text>
    </View>

    </AwesomeButton>
)

const styles = StyleSheet.create({
  button: {
    width: '100%',
    marginVertical: 10,
    paddingVertical: 2,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 26,
  },
})

export default Button
