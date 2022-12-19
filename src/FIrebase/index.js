import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: 'AIzaSyCfqBZuAyjHXEmzgGm0DMINXX-OeQtS_HM',
  authDomain: 'todo-app-2b79d.firebaseapp.com',
  projectId: 'todo-app-2b79d',
  storageBucket: 'todo-app-2b79d.appspot.com',
  messagingSenderId: '355715819689',
  appId: '1:355715819689:web:05216f3b01215bbde761b8'
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {
    db
}