import React, { useEffect } from 'react';
import { Background, Logo, Header, Paragraph, Button, ImageButton } from '../../Components';
import { View } from 'react-native';
import { loginScreen, signUpScreen, mainScreen } from '../../Utils/Constants/ScreenNames';
import { firebaseAuth } from '../../../environment/config';
import googleLogo from '../../../assets/google1.png';
import facebookLogo from '../../../assets/facebook.png';

export default function StartScreen({ navigation }) {

    useEffect(() => {
        firebaseAuth.onAuthStateChanged(user => {
            if(user){
                navigation.navigate(mainScreen)
            }
          })
    // Your code here
    }, []);

    const googleSignIn = () => {
        firebaseApp.auth()
            .signInWithRedirect(googleAuthProvider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;

                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                // ...
            }).catch((error) => {
                console.log(error)
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });
    }

    return (
        <Background requiredStyle={{marginTop:'40%'}}>
            {/* <Logo /> */}
            <Header>Legso</Header>
            <Paragraph>
                Let's make the world a better place!
            </Paragraph>
            <Button mode="contained" onPress={() => navigation.navigate(loginScreen)}>
                Login
            </Button>
            <Button
                mode="outlined"
                onPress={() => navigation.navigate(signUpScreen)}
            >
                Sign Up
            </Button>
            {/* <Header>Or Continue With..</Header>
            <View style={{flexDirection:"row"}}>
                    <View style={{flex:1}}>
                    <ImageButton 
                            // width={120}
                            color={"white"}
                            onPress={() => alert('facebook clicked')}
                            text={"Test Text"}
                            image={facebookLogo}
                        >
                            Test
                        </ImageButton>                       
                    </View>
                    <View style={{flex:1, alignItems:"flex-end"}}>
                        <ImageButton 
                            // width={120}
                            color={"white"}
                            onPress={() => googleSignIn()}
                            text={"Test Text"}
                            image={googleLogo}
                        >
                        </ImageButton>                    
                    </View>
            </View> */}

        </Background>
    )
}
