import { Injectable } from '@angular/core';

@Injectable({providedIn: "root"})
export class AppService {
  constructor(){}

  token:string;
  setToken(token:string){
    this.token = token;
    console.log(this.token)
  }
  getToken(){
    return this.token;
  }
}
