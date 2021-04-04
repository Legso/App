import React from 'react'
import { Alert, Platform, Image, View, Text, StyleSheet, Button } from 'react-native';
import { firebaseAuth, firebaseDatabase } from '../../../environment/config';
import { userType } from '../../Utils/Constants/enums';
import { Home, MessageScreen } from '../index';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {user:{type: -1}, uid:"", navigation:props.navigation }
    }
    componentDidMount(){
        console.log("component did mount");
        let self = this;
        firebaseAuth.onAuthStateChanged(user => {
            if(user){
                console.log(user.uid)
                var userRef = firebaseDatabase.ref('users/' + user.uid);
                userRef.once('value', (snapshot) => {
                    self.setState({ uid: user.uid, user:snapshot.val()});
                },  function (errorObject) {
                    console.log("The read failed: " + errorObject.code);
                });
                
            }
          })
    }
    signOut = () => {
        console.log('PressButton');
    }
    render() {
        if(this.state.user.type == userType.fresh){
            return (
            //     <View style={styles.container}>
            //     <Text>
            //         Hi { this.state.user.name}!
            //         {"\n"}
            //         Thank you so much for being here {"<3"}
            //         {"\n"}
            //         Your application is not yet processed, 
            //         {"\n"}
            //         someone from our team will contact you soon.
            //     </Text>
            //     <View>
            //         <Button
            //             onPress={this.signOut}
            //             title="Sign Out"
            //         />
            //     </View>
            // </View>
            <MessageScreen message={"Thank you so much for being here \n Your Application is not yet Processed \n Someone from our team will contact you soon"} />
            )
        }
        else if(this.state.user.type == userType.inactive){
            return (
            //     <View style={styles.container}>
            //     <Text>
            //         Hi { this.state.user.name}!
            //         {"\n"}
            //         Thank you so much for being here {"<3"}
            //         {"\n"}
            //         Your account is inactive. 
            //         {"\n"}
            //         Please send us an email at support@legso.org
            //     </Text>
            //     <View>
            //         <Button
            //             onPress={this.signOut}
            //             title="Sign Out"
            //         />
            //     </View>
            // </View>
            <MessageScreen message={"Thank you so much for being here \n Your account is inactive \n Please send us an email at support@legso.org"} />

            )
        }
        else if(this.state.user.type == userType.processed){
            return (
                <Home user={this.state.user} uid={this.state.uid} navigation={this.state.navigation} />
            )
        }
        else {
            return (
                // <View style={styles.container}>
                //     <Text>
                //         Hi !
                //         {"\n"}
                //         Thank you so much for being here {"<3"}
                //     </Text>
                //     <View>
                //         <Button
                //             onPress={this.signOut}
                //             title="Sign Out"
                //         />
                //     </View>
                // </View>
                <MessageScreen message={"Thank you so much for being here \n "} />

            )
        }
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})