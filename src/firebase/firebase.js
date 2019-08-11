import firebase from 'firebase';
import firebaseConfig from './firebaseConfig.json';

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firebaseDb = firebase.database();
