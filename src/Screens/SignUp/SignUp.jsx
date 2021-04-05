import React, { useState } from 'react'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-paper'
import { firebaseAuth, firebaseDatabase } from '../../../environment/config';
import { Background, Logo, Header, Button, TextInput, } from '../../Components';
import { loginScreen, mainScreen } from '../../Utils/Constants/ScreenNames';
import { userType } from '../../Utils/Constants/enums';
import { theme } from '../../Utils/Theme/Theme';
import { emailValidator, passwordValidator, nameValidator, phoneValidator} from '../../Utils/Validators/AuthValidators';

const radio_props = [
  {label: 'Helpee   ', value: 0 },
  {label: 'Helper', value: 1 }
];


const RegisterScreen = ( { navigation }) => {
  const [name, setName] = useState({ value: '', error: '' });
  const [phone, setPhone] = useState({ value: '', error: '' });
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });
  const [role, setRole] = useState({value:1})

  const onSignUpPressed = () => {
    const nameError = nameValidator(name.value)
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    const phoneError = phoneValidator(phone.value)

    if (emailError || passwordError || nameError || phoneError) {
      setName({ ...name, error: nameError })
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      setPassword({ ...phone, error: phoneError })
      return;
    }
    firebaseAuth.createUserWithEmailAndPassword( email.value, password.value)
    .then((res ) => {
      firebaseDatabase.ref('users/' + res.user.uid).set({
        name: name.value,
        type: userType.fresh,
        email: email.value,
        phone: phone.value,
        role: role.value
      }, (error) => {
        if (error) {
          // The write failed...
          console.log(error)
        } else {
          console.log("HENA")
          // Data saved successfully!
        }
      })
      console.log("HENAIOAOAOAOAO")
      navigation.navigate(mainScreen)
    })
    .catch(error => console.log(error));
    // navigation.reset({
    //   index: 0,
    //   routes: [{ name: 'Dashboard' }],
    // })
  }

  return (
    <Background requiredStyle={{marginTop:'30%'}}>
      {/* <BackButton goBack={navigation.goBack} /> */}
      <Logo />
      <Header>Create Account</Header>

      <TextInput
        label="Name"
        returnKeyType="next"
        value={name.value}
        onChangeText={(text) => setName({ value: text, error: '' })}
        error={!!name.error}
        errorText={name.error}
      />
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <TextInput
        label="Phone"
        returnKeyType="next"
        value={phone.value}
        onChangeText={(text) => setPhone({ value: text, error: '' })}
        error={!!phone.error}
        errorText={phone.error}
        keyboardType="number-pad"
      />
      <RadioForm
        radio_props={radio_props}
        initial={1}
        formHorizontal={true}
        labelHorizontal={true}
        buttonColor={'#560CCE'}
        selectedButtonColor={'#560CCE'} 
        animation={true}
        onPress={(value) => {setRole({value:value})}}
      />
      <Button
        mode="contained"
        onPress={onSignUpPressed}
        style={{ marginTop: 24 }}
      >
        Sign Up
      </Button>
      <View style={styles.row}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace(loginScreen) }>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})

export default RegisterScreen
