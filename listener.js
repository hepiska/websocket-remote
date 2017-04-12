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

var starCountRef = firebase.database().ref('users/1');

starCountRef.on('value', function(snapshot) {
  console.log(snapshot.val());
});
