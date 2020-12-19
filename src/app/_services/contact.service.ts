import { Injectable } from '@angular/core';
 import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../model/contact.model';

const API_URL = 'http://localhost:8080/api/contact/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class ContactService {

  constructor(private http: HttpClient) { }


readMessages(): Observable<any>{
  return this.http.get(API_URL , { responseType: 'text' });

}


send(data:Contact){
 return this.http.post<Contact>(API_URL,data, httpOptions);
}

}
