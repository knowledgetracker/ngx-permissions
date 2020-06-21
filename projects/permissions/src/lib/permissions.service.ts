import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PermissionsService {

  roles:any = [];

  constructor() {
    let user = JSON.parse(localStorage.getItem("LOGGED_IN_USER"));
    if(user){
      this.roles = user.roles;
    } 
    
  }

  hasPermission(permissions:string[]):boolean{
    let allowed = false;
    for(let role of this.roles){     
     
     if( permissions.indexOf(role) != -1){
        allowed = true;
        break;
      }
    }
    //console.log(allowed);
    return allowed;
  }
}
