import firebase from 'firebase/app'
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyA2fMHyK983dGUMuu3NYefAXIEnewZdjK0",
    authDomain: "food-recipe-app-d68b3.firebaseapp.com",
    projectId: "food-recipe-app-d68b3",
    storageBucket: "food-recipe-app-d68b3.appspot.com",
    messagingSenderId: "339677469375",
    appId: "1:339677469375:web:0f16919400a1ced98f040a",
    measurementId: "G-BW0W8Z3MK3"
  };

let app;

if(firebase.apps.length===0){
    app=firebase.initializeApp(firebaseConfig);
}else{
    app=firebase.app();
}


const db=app.firestore();
const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();
export{db,auth,provider};


//   <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/8.6.8/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/8.6.8/firebase-analytics.js"></script>

// <script>
//   // Your web app's Firebase configuration
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   var firebaseConfig = {
//     apiKey: "AIzaSyA2fMHyK983dGUMuu3NYefAXIEnewZdjK0",
//     authDomain: "food-recipe-app-d68b3.firebaseapp.com",
//     projectId: "food-recipe-app-d68b3",
//     storageBucket: "food-recipe-app-d68b3.appspot.com",
//     messagingSenderId: "339677469375",
//     appId: "1:339677469375:web:0f16919400a1ced98f040a",
//     measurementId: "G-BW0W8Z3MK3"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
// </script>