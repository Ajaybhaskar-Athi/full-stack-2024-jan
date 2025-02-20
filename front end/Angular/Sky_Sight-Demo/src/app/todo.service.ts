import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  // constructor() { }

  
  constructor(private http:HttpClient) { }
  url="http://localhost:5050/mobiles";

  fetchMobiles(){
  
    return this.http.get(this.url);
  // return this.http.get('="../../../../../assets/mobiles.json');

  }


  deleteMobile(id:any){
    return this.http.delete(this.url+"/"+id);
  }

  postMobile(body:any){
    return this.http.post(this.url,body);
  }

  putMobile(body:any){
    return this.http.put(this.url+"/body.id",body);
  }

}
