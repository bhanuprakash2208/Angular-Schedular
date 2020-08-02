import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Email:string;
  Password:string;
  constructor(private router:Router){
    
  }
  


  logIn(){
    if(this.Email == "admin@gmail.com" && this.Password == "1234"){
     this.router.navigate(["/schedule"])
    
    }
    else{
      alert("Please Enter Valid Details ");
    }
  }

  ngOnInit(): void {
  }

}
