import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: 'AIzaSyBV2e8_cSuJyOr43VSpa3EN66tSASlTdE8',
    authDomain: 'sbhacks-study.firebaseapp.com',
    databaseURL: 'https://sbhacks-study.firebaseio.com',
    projectId: 'sbhacks-study',
    storageBucket: 'sbhacks-study.appspot.com',
    messagingSenderId: '404088642979',
    appId: '1:404088642979:web:1706619a70fa22e0eb8e16',
    measurementId: 'G-LCJQ63G0ZB'
};

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
        this.db = app.database();
    }

    // *** Auth API ***
    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);

    // *** User API ***
    user = uid => this.db.ref(`users/${uid}`);
    users = () => this.db.ref('users');
}
export default Firebase;