import firebase from 'firebase';
import { TextShareingConfig } from '../../config/firebase/index';

const firebaseApp = firebase.initializeApp(TextShareingConfig);
const firebaseDb = firebaseApp.database();

export default class TextShareingModel {



}

