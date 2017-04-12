var firebase = require("firebase");

var config = {
  apiKey: "AIzaSyDYPqsWugadMAoRlOKdB5gVWzxznbZMxgA",
  authDomain: "coba-firebase-fbe8f.firebaseapp.com",
  databaseURL: "https://coba-firebase-fbe8f.firebaseio.com",
  projectId: "coba-firebase-fbe8f",
  storageBucket: "coba-firebase-fbe8f.appspot.com",
  messagingSenderId: "637907055821"
};
firebase.initializeApp(config);

function writeUserData(name, email, imageUrl) {
  firebase.database().ref('users/1').set({
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}

writeUserData('name', 'email', 'lalalal')

function kiri(){
  firebase.database().ref('move').set({
    move: 'kiri',
    stamp: Date.now().toString()
  });
 plusDivs(-1)
}

function kiri(){
  firebase.database().ref('move').set({
    move: 'kanan',
    stamp: Date.now().toString()
  });
  plusDivs(1)
}
