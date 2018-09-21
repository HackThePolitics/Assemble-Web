import config from '../config/firebase';
import firebase from 'firebase';

firebase.initializeApp(config);

export default firebase;
