import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/Services/user-auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  Email:string;
  Password:string;
  constructor(private userAuthservice:UserAuthService,
    private router:Router) {
      this.Email="";
    this.Password="";
    }

  ngOnInit(): void {
  }

  Login()
  {
    this.userAuthservice.Login(this.Email,this.Password);
    this.router.navigate(['/Home']);
  }

}
