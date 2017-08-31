import * as firebase from 'firebase';
export class AuthService {
  signUpUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(
      error => console.log(error)
    );
  }
  signInUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .catch(
      error => console.log(error)
    )
    .then(
      response => {
        console.log('Succesful: ');
        console.log(response);
      }
    );
  }
  getToken() {
    return firebase.auth().currentUser.getToken();
  }
}
