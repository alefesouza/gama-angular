import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private pUser = new BehaviorSubject(null);
  currentUser = this.pUser.asObservable();

  constructor(private httpClient: HttpClient) { }

  login(email, password) {
// tslint:disable-next-line: max-line-length
    return this.httpClient.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyC4JlSXloABo8nCHsjECLMkBmXLWJTIgoc', {
      email,
      password,
    });
  }

  createAccount(email, password) {
    // tslint:disable-next-line: max-line-length
    return this.httpClient.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyC4JlSXloABo8nCHsjECLMkBmXLWJTIgoc', {
      email,
      password,
    });
  }

  verifyToken(token) {
// tslint:disable-next-line: max-line-length
    return this.httpClient.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/getAccountInfo?key=AIzaSyC4JlSXloABo8nCHsjECLMkBmXLWJTIgoc', {
      idToken: token
    });
  }

  setUser(user) {
    this.pUser.next(user);
  }

  logout() {

  }

}
