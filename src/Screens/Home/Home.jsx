import React from 'react'
import { Alert, Platform, Image, View, Text, StyleSheet } from 'react-native';
import { Background, Card } from '../../Components';
import { firebaseAuth, firebaseDatabase } from '../../../environment/config';
import { postsArray } from '../../Utils/Constants/DummyData';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {user:{type: -1}, uid:"", posts:postsArray }
    }
    componentDidMount(){
        console.log("component did mount");
        let self = this;
        //         var userRef = firebaseDatabase.ref('users/' + user.uid);
        //         userRef.once('value', (snapshot) => {
        //             self.setState({ uid: user.uid, user:snapshot.val()});
        //         },  function (errorObject) {
        //             console.log("The read failed: " + errorObject.code);
        //         });
    }

    render() {
        return (
            <Background requiredStyle={{marginTop:'10%'}}>
                {
                    this.state.posts.map(post => {
                        return <Card post={post} />
                    })
                }            
            </Background>
        )
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})