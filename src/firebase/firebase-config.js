
const config = {
  apiKey: "AIzaSyDMAZxItAPWTIasaXgWouvlK_mbUeIzisQ",
  authDomain: "waldo-cf672.firebaseapp.com",
  projectId: "waldo-cf672",
  storageBucket: "waldo-cf672.appspot.com",
  messagingSenderId: "822719725131",
  appId: "1:822719725131:web:44e6c4f127d3fb74fc57ce"
};

export function getFirebaseConfig() {
    if (!config || !config.apiKey) {
      throw new Error(
        'No Firebase configuration object provided.' +
          '\n' +
          "Add your web app's configuration object to firebase-config.js",
      );
    } else {
      return config;
    }
  }