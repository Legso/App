What do I need to do ? 
- Clone the project and create a config.js file in environment directory. 
- The config file should look like this : 
    import * as firebase from 'firebase';

    const firebaseConfig = {
        apiKey: "API KEY",
        authDomain: "AUTH DOMAIN",
        projectId: "PROJECT ID",
        storageBucket: "STORAGE BUCKER",
        messagingSenderId: "MSG SENDER ID",
        appId: "APP ID,
        measurementId: "MEAUREMENT ID"
    };
    export const firebaseApp = firebase.initializeApp(firebaseConfig);
    export const firebaseAuth = firebaseApp.auth();
    export const googleAuthProvider  = new firebase.auth.GoogleAuthProvider();

