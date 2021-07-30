export class AuthService {
  loggedIn = false;

  isAuthenticate() {
    const promise = new Promise((resolve, reject) => {
      setTimeOut(() => {
        resolve(this.loggedIn);
      }, 800);
    });
  }
  logIn() {
    this.loggedIn = true;
  }
  logOut() {
    this.loggedIn = false;
  }
}
