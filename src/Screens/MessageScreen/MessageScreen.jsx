import React from 'react';
import { Background, Logo, Header, Paragraph, Button, ImageButton } from '../../Components';


export default function MessageScreen({ navigation, message }) {
    console.log(message)
    return (
        <Background requiredStyle={{marginTop:'40%'}}>
            {/* <Logo /> */}
            <Header>Legso</Header>
            <Paragraph>
                Let's make the world a better place!
            </Paragraph>
            <Header>{message}</Header>

        </Background>
    )
}
