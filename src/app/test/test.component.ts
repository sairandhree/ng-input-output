import { Component, OnInit, Input,
   EventEmitter, Output } from '@angular/core';
import { User } from '../user.model';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
 @Input() user :User;
 @Output() userNameChanged = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  changeUserName(userName){
    this.userNameChanged.emit({
      changedUserName:userName, 
      message : "the user name was changed by child object",
    });
    
  }

}
