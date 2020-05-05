import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import { config } from "../constants";
if (!firebase.apps.length) {
  firebase.initializeApp(config);
  firebase.firestore();
}
export default firebase.firestore();
