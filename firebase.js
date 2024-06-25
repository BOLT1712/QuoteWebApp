
const firebaseConfig = {
    apiKey: "AIzaSyDbB-DZTVF9kk5ILK4UyS7rAZly2E7d7BI",
    authDomain: "quote-app-500c8.firebaseapp.com",
    projectId: "quote-app-500c8",
    storageBucket: "quote-app-500c8.appspot.com",
    messagingSenderId: "834986551116",
    appId: "1:834986551116:web:0bd96599aa0cb4372891e9",
    measurementId: "G-JNPGZCGK5Z"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);