import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IAdmin } from '../Moduls/iadmin';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  private httpOptions;
  constructor(private httpClient: HttpClient) {
    this.httpOptions={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })};
    
  }

  Login()
  {
    //return this.httpClient.post()
  }
  Register(admin:IAdmin):Observable<IAdmin>
  {
   return this.httpClient.post<IAdmin>(`http://localhost:34300/api/Account/Rigester`,JSON.stringify(admin),{headers: new HttpHeaders({'Content-Type': 'application/json'})})
  }
  LogOut()
  {
    
  }
 }
