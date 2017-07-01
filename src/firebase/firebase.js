import firebase from 'firebase'
import { firebaseConfig } from './config';
import { services } from './services'

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firebaseDb = firebase.database();