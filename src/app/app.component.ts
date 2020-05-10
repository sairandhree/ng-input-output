import { Component } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-second-project';
  users :User[] = [];
  
  ngOnInit(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      console.log('inside first then');
      return response.json()
    })
    .then(usersResponse => {
      
      usersResponse.forEach(user => {
        console.log(' user data is ',user);
        this.users.push(user);
      });  
      
    });
    
  }
  


 


}

