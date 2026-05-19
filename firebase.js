import { initializeApp } from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getFirestore } from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {

  apiKey:
  "AIzaSyDFRKLfdQOUSDF3eSGODvTusnV_E_pjGwI",

  authDomain:
  "dethithpt-2dd89.firebaseapp.com",

  projectId:
  "dethithpt-2dd89",

  storageBucket:
  "dethithpt-2dd89.firebasestorage.app",

  messagingSenderId:
  "771616747613",

  appId:
  "1:771616747613:web:052864bfd2b0f1018c1db4"
};

const app =
  initializeApp(firebaseConfig);

export const db =
  getFirestore(app);