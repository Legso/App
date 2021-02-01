import React from 'react'
import { StyleSheet } from 'react-native'
import AwesomeButton from 'react-native-really-awesome-button'
import { theme } from '../../Utils/Theme/Theme';

const Button = ({ mode, style, color, width, ...props }) => (
  <AwesomeButton
    width={ width ? width : '100%'}
    mode={mode}
    backgroundColor={ color ? color : theme.colors.primary}
    {...props}
  />
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
