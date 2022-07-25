import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, query, doc, updateDoc } from 'firebase/firestore';

let firebaseConfig = {
    'apiKey': process.env.REACT_APP_FIREBASE_API_KEY,
    'authDomain': process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    'projectId': process.env.REACT_APP_FIREBASE_PROJECT_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


let feedbackListArray = [];

async function saveRegister(feedback, id) {
    if (id != null) {
        await updateDoc(doc(db, "feedback", id), feedback);
    } else {
        let id = await addDoc(collection(db, "feedback"), feedback);
        feedback.id = id;
        feedbackListArray.push(feedback);
    }
}

async function listRegisters() {
    const querySnapshot = await getDocs(query(collection(db, "feedback")));
    feedbackListArray = [];
    querySnapshot.forEach((doc) => {
        feedbackListArray.push({
            id: doc.id,
            name: doc.data().name,
            message: doc.data().message
        });
    });
}

export { feedbackListArray, saveRegister, listRegisters };