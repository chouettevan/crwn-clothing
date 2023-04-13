import { initializeApp } from 'firebase/app';
import { 
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyCDc4NJ38Hgd_4cx2j06q-BiMnDEPr_0OY",
    authDomain: "crown-clothing-db-b5b22.firebaseapp.com", 
    projectId: "crown-clothing-db-b5b22", 
    storageBucket: "crown-clothing-db-b5b22.appspot.com",
    messagingSenderId: "402298852851", 
    appId: "1:402298852851:web:ca24b031024322374cee86", 
    measurementId: "G-KX2BNSJPJJ"
};
  
//eslint-disable-next-line
const firebaseApp = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt:'select_account'
});  

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth,googleProvider);

export const db = getFirestore();

export const createUserDocument = async (userAuth,extraInfo={}) => {
    const userDocRef = doc(db,'users',userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);
    if (!userSnapshot.exists()) {
        const { displayName,email } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef,{
                displayName,
                email,
                createdAt,
                ...extraInfo
            });
        } catch (error) {
            console.log('error creating the user',error.message)
        }
    }
    return userDocRef;
};
export const createEmailPasswordAuth = async (email,password) => {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth,email,password);
};
export const emailPasswordSignIn = async (email,password) => {
    if (!email || !password ) return;
    return await signInWithEmailAndPassword(auth,email,password);
};