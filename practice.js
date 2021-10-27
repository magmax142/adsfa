
var firebaseConfig = {
  apiKey: "AIzaSyD1vT2_gFx6bfu7zEbCyV6-uSgI8CStYQk",
  authDomain: "kwitter-26687.firebaseapp.com",
  databaseURL: "https://kwitter-26687-default-rtdb.firebaseio.com",
  projectId: "kwitter-26687",
  storageBucket: "kwitter-26687.appspot.com",
  messagingSenderId: "758272794972",
  appId: "1:758272794972:web:7bc14e27b9368105236199"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function adduser(){
    username=document.getElementById("user_name").value;
    firebase.database().ref("/").child(username).update({
        purpose:"main folder created succesfully"
    });
    firebase.database().ref(username).push({
        subject:"english", 
        purpose:"subfolder created",
        marks:80
    });
}