import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration-component',
  templateUrl: './registration-component.component.html',
  styleUrls: ['./registration-component.component.scss']
})
export class RegistrationComponentComponent implements OnInit {
  user: any;
  
  userForm = this.formBuilder.group({
    username: [''],
    email: [''],
    password1: [''],
    password2: [''],
  });
constructor(private userService: UserServiceService,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
  }

  showUser(){
    this.userService.getUsers().subscribe(response => {
      console.log(response)
    ,
    err=>
    console.log(err)
    });
  
  }
  doRegistration(){
    console.log(this.userForm.value)
    this.userService.registration(this.userForm).subscribe(response =>{
      console.log(response)
      localStorage.setItem("token" , response['key'])
      console.log(localStorage.getItem('token'))
    ,
    err=>
    console.log(err)
    })
  }
}
