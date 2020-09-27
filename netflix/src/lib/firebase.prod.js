import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBk1o8QDJRzI3mzbPWCWfEZ1xNM1Nd1Qqg',
  authDomain: 'netflix-clone-353de.firebaseapp.com',
  databaseURL: 'https://netflix-clone-353de.firebaseio.com',
  projectId: 'netflix-clone-353de',
  storageBucket: 'netflix-clone-353de.appspot.com',
  messagingSenderId: '189522523330',
  appId: '1:189522523330:web:ad624d5be29cdf6a2f775b',
  measurementId: 'G-355R594497',
};
const firebase = Firebase.initializeApp(config);
// seedDatabase(firebase);

export { firebase };
