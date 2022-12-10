import { initializeApp } from 'firebase/app';
import { getFirebaseConfig } from './firebase-config';
import { getFirestore, collection, getDocs, doc } from "firebase/firestore";

const app = initializeApp(getFirebaseConfig());
const db = getFirestore(app);
const locationData = getCharacters(db);



async function getCharacters(db) {
  const characters = collection(db, 'characterData');
  const characterSnapshot = await getDocs(characters);
  const characterList = characterSnapshot.docs.map((doc) => doc.data());
  return characterList;
}


export { locationData }