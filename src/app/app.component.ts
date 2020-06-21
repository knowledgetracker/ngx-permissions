import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngx-permissions';

  roles:any = ["USER"];
  constructor(){
    localStorage.clear();

    var user= {id:1, roles: this.roles};
    localStorage.setItem("LOGGED_IN_USER", JSON.stringify(user));

  }
}
