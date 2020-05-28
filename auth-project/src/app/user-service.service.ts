import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private url = 'http://127.0.0.1:8000/api/v1/'
  private registration_url = 'http://127.0.0.1:8000/api/v1/rest-auth/registration/'
  private login_url= 'http://localhost:8000/api/v1/rest-auth/login/'
  token = 'Token ' + localStorage.getItem('token') 

  
  constructor(private httpClient: HttpClient) {
   }
  
  getUsers(){
    const headerDict = {
      'Content-Type': 'application/json',
      'Authorization': this.token,
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    
    return this.httpClient.get(this.url,requestOptions)
  }

  registration(userData){
   

    return this.httpClient.post(this.registration_url,userData.value)
  }

  login(userData){
    return this.httpClient.post(this.login_url,userData.value)
  }
}
