import { Component } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-second-project';
  user : User;
  
  constructor(){
    this.user = new User();
    this.user.email = "adsf@sasdf.com";
    this.user.name = "asdf";
    this.user.phone = 345345345345;
  }
  


  onChangeUser(event){
    this.user.name = event.changedUserName;
  }


}

