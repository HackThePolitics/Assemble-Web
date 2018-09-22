import config from '../config/firebase';
import firebase from 'firebase/app';

firebase.initializeApp(config);

// firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
