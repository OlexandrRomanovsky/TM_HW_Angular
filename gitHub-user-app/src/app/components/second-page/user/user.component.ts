import { Component, OnInit, Input, Output } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input() userData: User;
  @Output() activeClass;

  constructor() { }
  
  ngOnInit() {
  }

  activeLink(){
    

  }

}
