import config from "../config/firebase";
import firebase from "firebase/app";
import "firebase/firestore";

firebase.initializeApp(config);

firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
