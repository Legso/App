import React, { useState, useEffect } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput, Button } from '../../Components';
import { firebaseAuth, firebaseDatabase } from '../../../environment/config';
import { loginScreen, mainScreen } from '../../Utils/Constants/ScreenNames';
import { helpTypeValidator } from '../../Utils/Validators/PostValidators';
import { theme } from '../../Utils/Theme/Theme';
import { Background, Header } from '../../Components';
import { postStatus } from '../../Utils/Constants/enums';
const radio_props = [
  {label: 'Helpee   ', value: 0 },
  {label: 'Helper', value: 1 }
];


const PostForm = ( { navigation, user, uid }) => {
  const [helpType, setHelpType] = useState({ value: '', error: '' });
  const [notes, setNotes] = useState({ value: '', error: '' });
  const [currentUser, setUser] = useState('');
  const [currentUid, setUid] = useState('');

    useEffect(() => {
        firebaseAuth.onAuthStateChanged(user => {
            if(user){
                var userRef = firebaseDatabase.ref('users/' + user.uid);
                userRef.once('value', (snapshot) => {
                    setUser(snapshot.val());
                    setUid(user.uid);
                    console.log("HENAAAAAAAAAAA")
                },  function (errorObject) {
                    console.log("The read failed: " + errorObject.code);
                });
                
            }
          })
    }, []);


  const onPostClick = () => {
    const helpTypeError = helpTypeValidator(helpType.value)

    if ( helpTypeError ) {
      setHelpType({ ...helpType, error: helpTypeError })
      return;
    }
    let obj = {
        status: postStatus.active,
        name: currentUser.name ,
        coordinates: {
            Long: `41°25'01"N`,
            Lat: `120°58'57"W`
        },
        phoneNumber: currentUser.phone,
        datePosted: Date.now(),
        notes: notes.value,
        typeOfHelp: helpType.value,
        helpeeId: currentUid,
        gender: currentUser.gender || "N/A",
        photo:  currentUser.photo || 'https://i.pinimg.com/originals/a5/d1/bd/a5d1bd08033555b79c675685e2dff79f.jpg'
    }
    let postObj = firebaseDatabase.ref('/posts').push();
    postObj.set(obj)
    .then(res => {
        console.log(res);
        alert("Done");
        navigation.goBack();
    })
    .catch(err => {
        console.log(err)
    })

  }

  return (
    <Background requiredStyle={{marginTop:'10%'}}>
        <Header>
            Here's to hoping someone responds faster than usain bolt runs a 100m 
        </Header>
        <TextInput
            label="Type of Help"
            returnKeyType="next"
            value={helpType.value}
            onChangeText={(text) => setHelpType({ value: text, error: '' })}
            error={!!helpType.error}
            errorText={helpType.error}
        />
        <TextInput
            label="Notes"
            value={notes.value}
            onChangeText={(text) => setNotes({ value: text, error: '' })}
            error={!!notes.error}
            errorText={notes.error}
        />
        <Button
            mode="contained"
            onPress={onPostClick}
            style={{ marginTop: 24 }}
        >
            Post Request
        </Button>
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
  input: {
    width: '100%'
  }
})

export default PostForm
