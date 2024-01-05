// data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable  } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'http://localhost:3000/api/models';


  constructor(private http: HttpClient) {}
  
  // data.service.ts
createUser(user: any): Observable<any> {
  return this.http.post('http://localhost:3000/api/users', user);
}
userText(text: any): Observable<any> {
  return this.http.post('http://localhost:3000/api/texts', text);
}

userAll(text: any): Observable<any> {
  return this.http.get('http://localhost:3000/api/texts', text);
}
userData(text: any): Observable<any> {
  return this.http.get('http://localhost:3000/api/users', text);
}



}


