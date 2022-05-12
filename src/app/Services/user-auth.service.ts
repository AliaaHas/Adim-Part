import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from '../ViewModel/IUser/iuser';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  private HttpOptions;
  private ISLoggedSubject:BehaviorSubject<boolean>;
  constructor(private HttpClientService: HttpClient) {

    this.HttpOptions={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
       //, 'Authorization': 'Token'
      })
    }
    this.ISLoggedSubject=new BehaviorSubject<boolean>(false);

  }



  Register(newUser:IUser): Observable<IUser>
  {


   return this.HttpClientService.post<IUser>(`https://localhost:44386/api/Account/Register`, JSON.stringify(newUser),this.HttpOptions);
  }


  Login(Email:string, Password:string)
  {
     var UserToken=`UserEmail:${Email},Password:${Password}Key:SecretKey2222`
     localStorage.setItem("token",UserToken);
     this.ISLoggedSubject.next(true);
  }
  // Logout()
  // {
  //    localStorage.removeItem("token");
  //    console.log("IsLogged",this.ISloggedin);
  //    this.ISLoggedSubject.next(false);
  // }

  // get ISloggedin(): boolean
  // {
  //    return localStorage.getItem("token") ? true:false;
  // }

  // getStatusLoging()
  // {
  //   return this.ISLoggedSubject;
  // }

}
