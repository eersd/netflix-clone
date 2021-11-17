import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyA6YeZ3W7yfaN3ILigqbo3C-iGuPEM5eKA",
  authDomain: "netflix-clone-7f279.firebaseapp.com",
  projectId: "netflix-clone-7f279",
  storageBucket: "netflix-clone-7f279.appspot.com",
  messagingSenderId: "614868361548",
  appId: "1:614868361548:web:70d4690f043d940872efe9"
};
const firebase = Firebase.initializeApp(config);
// seedDatabase(firebase);

export { firebase };
