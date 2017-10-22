import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyD5sIpxpVbQwyVIf5oGtiv8UA1jHqC1Ly4',
  authDomain: 'vue-sandbox-turnout.firebaseapp.com',
  databaseURL: 'https://vue-sandbox-turnout.firebaseio.com',
  projectId: 'vue-sandbox-turnout',
  storageBucket: '',
  messagingSenderId: '346186096578'
}

export const firebaseApp = firebase.initializeApp(config)
