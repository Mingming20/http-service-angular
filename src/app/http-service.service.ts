import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Info } from './info';
import { getLocaleDateFormat } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  private apiUrl = "http://jsonplaceholder.typicode.com/users";

  constructor(private http: HttpClient) { }

  getDataApi() {
    return this.http.get(this.apiUrl)
  }
  addApi(data: Info){
    return this.http.post(this.apiUrl , data)
  }
  deleteApi(id : string){
    return this.http.delete(this.apiUrl + "/:" + id)
  }
  updateData(user, id: any) {
    return this.http.put(this.apiUrl + "/:" + user, id)
  }
  viewData(id){
    return this.http.get(this.apiUrl + "/" + id)
  }
}