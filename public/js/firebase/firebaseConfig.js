const firebaseConfig = {
  apiKey: 'AIzaSyCCVyJqR7dF46N-vZxL9ahYeGwh3bLmses',
  authDomain: 'chat-cifrado-cesar.firebaseapp.com',
  databaseURL: 'https://chat-cifrado-cesar.firebaseio.com',
  projectId: 'chat-cifrado-cesar',
  storageBucket: 'chat-cifrado-cesar.appspot.com',
  messagingSenderId: '509657762176',
  appId: '1:509657762176:web:7e7f1ff591bd0def459965',
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };
