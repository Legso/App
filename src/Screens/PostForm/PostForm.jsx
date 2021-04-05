import React, { useState, useEffect } from 'react'
import { StyleSheet } from 'react-native';
import { TextInput, Button } from '../../Components';
import { firebaseAuth, firebaseDatabase } from '../../../environment/config';
import { helpTypeValidator } from '../../Utils/Validators/PostValidators';
import { theme } from '../../Utils/Theme/Theme';
import { Background, Header } from '../../Components';
import { postStatus } from '../../Utils/Constants/enums';
import * as Location from 'expo-location';


const PostForm = ( { navigation, user, uid }) => {
  const [helpType, setHelpType] = useState({ value: '', error: '' });
  const [notes, setNotes] = useState({ value: '', error: '' });
  const [currentUser, setUser] = useState('');
  const [currentUid, setUid] = useState('');
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

    useEffect(async () => {
        firebaseAuth.onAuthStateChanged(user => {
            if(user){
                var userRef = firebaseDatabase.ref('users/' + user.uid);
                userRef.once('value', (snapshot) => {
                    setUser(snapshot.val());
                    setUid(user.uid);
                },  function (errorObject) {
                    console.log("The read failed: " + errorObject.code);
                });
                
            }
          })
        let { status } = await Location.requestPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
      
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
          
    }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  const onPostClick = () => {
    const helpTypeError = helpTypeValidator(helpType.value)

    if ( helpTypeError ) {
      setHelpType({ ...helpType, error: helpTypeError })
      return;
    }
    let obj = {
        status: postStatus.active,
        name: currentUser.name ,
        location,
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
