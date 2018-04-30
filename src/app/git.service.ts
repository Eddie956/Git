import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GitService {

 public username:string;
 public clientid = '0f7f527f3f6e9e95aa03';
 public  clientsecret = '2602cee69e47cffd68cac3f72c4af6b3a234a4ef';

  constructor(public http:Http) {
    console.log("service is ready");
    this.username = 'Eddie956';
   }

   getProfileInfo(){
     return this.http.get("https://api.github.com/users/" + this.username + "?client_id" + 
     this.clientid + "&client_secret" + this.clientsecret)
     .map(res => res.json());
   }

}
