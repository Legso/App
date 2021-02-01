import React from 'react';
import { Background, Logo, Header, Paragraph, Button } from '../../Components';
import { View } from 'react-native';

export default function StartScreen() {

    return (
        <Background>
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
                        <Button 
                            width={120}
                            onPress={() => alert('Google Clicked')}
                        >
                            Google
                        </Button>                    
                    </View>
                    <View style={{flex:1}>
                        <Button 
                            width={120}
                            onPress={() => alert('Facebook Clicked')}
                        >
                            Facebook
                        </Button>                    
                    </View>
            </View>

        </Background>
    )
}
