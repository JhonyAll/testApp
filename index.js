// Import the functions you need from the SDKs you need
const firebase = require('firebase')
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0l3wUegS3FC8bI7gPkeAFQAbLWTNcOPM",
  authDomain: "testproject-5865c.firebaseapp.com",
  projectId: "testproject-5865c",
  storageBucket: "testproject-5865c.appspot.com",
  messagingSenderId: "740133939777",
  appId: "1:740133939777:web:f76c52698862470d6ab4c0"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

// Ler dados da coleção "usuario"
db.collection("usuario").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    console.log(`Id: ${doc.id}, Dados: ${JSON.stringify(doc.data())}`);
  });
}).catch((error) => {
  console.error("Erro ao ler os dados: ", error);
});