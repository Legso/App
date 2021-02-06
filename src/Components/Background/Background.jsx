import React from 'react'
import { ImageBackground, StyleSheet, KeyboardAvoidingView, ScrollView } from 'react-native';
import { theme } from '../../Utils/Theme/Theme';
import backgroundDot from '../../assets/background_dot.png';

const Background = ({ requiredStyle, children }) => {

  return (
    <ImageBackground
      source={backgroundDot}
      resizeMode="repeat"
      style={styles.background}
    >
      <ScrollView style={styles.scrollView}>
        <KeyboardAvoidingView style={requiredStyle ? [styles.container, requiredStyle] : [styles.container]}  behavior="padding" keyboardVerticalOffset={10}>
            {children}
        </KeyboardAvoidingView>
      </ScrollView>
    </ImageBackground>
  )
} 

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    backgroundColor: theme.colors.surface,
  },
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    // margin: '50%'
  },
  children: {
    position: "absolute"
  },
  scrollView: {
    width: '100%',
    alignSelf: 'center',
  }
})

export default Background
