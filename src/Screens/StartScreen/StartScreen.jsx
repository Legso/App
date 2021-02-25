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
                this.props.navigation.navigate(mainScreen)
            }
          })
    // Your code here
    }, []);

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
            <Header>Or Continue With..</Header>
            <View style={{flexDirection:"row"}}>
                    <View style={{flex:1}}>
                    <ImageButton 
                            // width={120}
                            color={"white"}
                            onPress={() => alert('Facebook Clicked')}
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
                            onPress={() => alert('Facebook Clicked')}
                            text={"Test Text"}
                            image={googleLogo}
                        >
                        </ImageButton>                    
                    </View>
            </View>

        </Background>
    )
}
