import firebaseOb from 'firebase';
import { firebaseConfig } from './firebaseConfig';

const {
   API_KEY,
   AUTH_DOMAIN,
   DATABASE_URL,
   PROJECT_ID,
   STORAGE_BUCKET,
   MESSAGING_SENDER_ID,
   APP_ID,
   MEASUREMENT_ID,
} = firebaseConfig;

const config = {
   apiKey: API_KEY,
   authDomain: AUTH_DOMAIN,
   databaseURL: DATABASE_URL,
   projectId: PROJECT_ID,
   storageBucket: STORAGE_BUCKET,
   messagingSenderId: MESSAGING_SENDER_ID,
   appId: APP_ID,
   measurementId: MEASUREMENT_ID,
};

const firebase = firebaseOb.initializeApp(config);

export const auth = firebase.auth();
export const storage = firebase.storage();
export const firestore = firebase.firestore();
