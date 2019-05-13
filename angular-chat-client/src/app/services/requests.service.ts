import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Request} from '../models/request.model';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private http: HttpClient ) { }
  public create (request:Request) {

    return this.http.post('http://localhost:8080/ReimbursementApp/submit-request',request)
    .subscribe(response => {console.log(response);});
                        // http://localhost:8080/ReimbursementApp/submit-request
  }




}
