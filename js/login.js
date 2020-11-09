// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAOAZYaDINljIUp9swqbJeSr11B1BAjSNE",
    authDomain: "new-project-baqi.firebaseapp.com",
    databaseURL: "https://new-project-baqi.firebaseio.com",
    projectId: "new-project-baqi",
    storageBucket: "new-project-baqi.appspot.com",
    messagingSenderId: "157512492562",
    appId: "1:157512492562:web:f3891da66c881e5b0c5acb"
};

  // intialize firebase 
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();

// Grabbing DOM elements

const submitBtn = document.querySelector('#submit');

let userName = document.querySelector('#name');

let userEmail = document.querySelector('#email');

const db = firestore.collection("mails");

submitBtn.addEventListener("click", function(){

  let userNameInput = userName.value;
  let userEmailInput = userEmail.value;

  // Acess database

  db.doc().set({
    name: userNameInput,
    email: userEmailInput
  }).then(function(){
    console.log("Data Sent!!!");
  })
  .catch(function(error){
    console.log(error);
  })

})