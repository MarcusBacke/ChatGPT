import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoAmJf1-UN1MrSp1Gf8and17q9eMhaLlU",
  authDomain: "chatgpt-messenger-yt-99621.firebaseapp.com",
  projectId: "chatgpt-messenger-yt-99621",
  storageBucket: "chatgpt-messenger-yt-99621.appspot.com",
  messagingSenderId: "431459115877",
  appId: "1:431459115877:web:c785ae2d0696259a24778c"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};