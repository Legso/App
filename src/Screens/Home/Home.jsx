import React from 'react'
import { Modal, Pressable, Image, View, Text, StyleSheet } from 'react-native';
import { Background, Card, Header } from '../../Components';
import { firebaseDatabase } from '../../../environment/config';
import { postForm } from '../../Utils/Constants/ScreenNames';
import { userRole, postStatus } from '../../Utils/Constants/enums';
// import { postsArray } from '../../Utils/Constants/DummyData';
import { FAB } from 'react-native-paper';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        let postRef = firebaseDatabase.ref('posts').orderByChild("datePosted");
        this.state = {
            user: {type: -1, ...props.user}, 
            uid: props.uid, 
            posts: [],
            modalVisible: false,
            navigation: props.navigation
        }
        postRef.on('child_added', (data) => {
            if(data.val().status == postStatus.inactive){
                return;
            }
            if(this.state.posts.length >= 25){
                let postsArray = this.state.posts;
                postsArray.shift();
                let post = { postId: data.key, ...data.val()}
                postsArray.push(post);
                this.setState({posts: postsArray})
            }
            else {
                console.log("HENA")
                console.log(data.key)
                let postsArray = this.state.posts;
                let post = { postId: data.key, ...data.val()}
                postsArray.push(post);
                this.setState({posts: postsArray})
            }
        // addCommentElement(postElement, data.key, data.val().text, data.val().author);
        });

    }
    
    componentDidMount(){
        console.log("component did mount");
        let self = this;
    }

    render() {
        return (
            <Background requiredStyle={{marginTop:'10%'}}>
                <Header> Active Posts </Header>
                {
                    this.state.posts ? this.state.posts.map((post, i) => {
                        return <Card post={post} owner={post.helpeeId==this.state.uid} key={i}/>
                    }) : null
                }   
                <FAB
                    style={styles.fab}
                    large
                    icon="plus"
                    disabled={this.state.user.role == userRole.helper}
                    onPress={() => this.state.navigation.navigate(postForm, {user: this.state.user, uid: this.state.uid})}
                />
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        this.setState({modalVisible: false})
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            {/* TODO Add code to confirm marking as completed */}
                            <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => this.setState({modalVisible: false})}
                            >
                            <Text style={styles.textStyle}>Close</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
            </Background>
        )
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        backgroundColor: '#560CCE'
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        backgroundColor: 'rgba(0, 0, 0, 0.7)'
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#560CCE",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
})
