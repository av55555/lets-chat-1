
      var firebaseConfig = {
      apiKey: "AIzaSyDFMl9A5vdnqfNwpyQ06zOgIGum_v-2FdU",
      authDomain: "kwitter-f1d2b.firebaseapp.com",
      databaseURL: "https://kwitter-f1d2b-default-rtdb.firebaseio.com",
      projectId: "kwitter-f1d2b",
      storageBucket: "kwitter-f1d2b.appspot.com",
      messagingSenderId: "409132820177",
      appId: "1:409132820177:web:75cd6ff4c6d742e5a987f0",
      measurementId: "G-KF9545S3RC"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
