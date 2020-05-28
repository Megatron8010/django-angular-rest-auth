import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userDetail:any
  constructor(private userService: UserServiceService,private formBuilder: FormBuilder) { }
  userForm = this.formBuilder.group({
    username: [''],
    password: [''],
  });
  ngOnInit(): void {
    
  }
  
  doLogin(){
    console.log(this.userForm.value)
    this.userService.login(this.userForm).subscribe(response =>{
      console.log(response)
      localStorage.setItem("token" , response['key'])
      console.log(localStorage.getItem('token'))
    ,
    err=>
    console.log(err)
    })

    this.userService.getUsers().subscribe(response =>{
      this.userDetail = response
      console.log(JSON.parse(this.userDetail))
    })
  }
}
