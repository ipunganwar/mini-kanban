import { initializeApp } from 'firebase'

const app = initializeApp({
  apiKey: 'AIzaSyBU2vsE6I_u6UBOWW4I9CDGlkdL5mAli-E',
  authDomain: 'ganban-f9714.firebaseapp.com',
  databaseURL: 'https://ganban-f9714.firebaseio.com',
  storageBucket: 'ganban-f9714.appspot.com'
})

export const db = app.database()
export const taskRef = db.ref('tasks')
