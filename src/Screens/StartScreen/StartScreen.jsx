import React from 'react';
import { Background, Logo, Header, Paragraph, Button, ImageButton } from '../../Components';
import { View } from 'react-native';
import googleLogo from '../../../assets/google1.png';
import facebookLogo from '../../../assets/facebook.png';

export default function StartScreen() {

    return (
        <Background requiredStyle={{marginTop:'40%'}}>
            <Logo />
            <Header>Login Template</Header>
            <Paragraph>
                The easiest way to start with your amazing application.
            </Paragraph>
            <Button mode="contained" onPress={() => alert('Login Clicked')}>
                Login
            </Button>
            <Button
                mode="outlined"
                onPress={() => alert('Sign Up Clicked')}
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
