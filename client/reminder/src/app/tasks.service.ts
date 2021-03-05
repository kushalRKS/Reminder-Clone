import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {environment} from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})

export class taskManagerService {
  constructor(private httpClient: HttpClient) { }


  getTaskLists = ():Observable<any> => {
    return this.httpClient.get(`${environment.API_URL}/lists` );
  }

  createTaskList = (payload:any) => {
    return this.httpClient.post(`${environment.API_URL}/lists`, payload );
  }


}
