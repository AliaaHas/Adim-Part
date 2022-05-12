import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { passwordMatchValidator } from 'src/app/CustomValidator/passwordvalidation';
import { forbiddenNameValidator } from 'src/app/CustomValidator/UserNameValidator';
import { UserAuthService } from 'src/app/Services/user-auth.service';
import { IUser } from 'src/app/ViewModel/IUser/iuser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
userregisterformgroup:FormGroup;

//NewUser:IUser;

  constructor(private fb: FormBuilder,
    private userAuthservice:UserAuthService,
    private router:Router,
    private toast :NgToastService ) {
    this.userregisterformgroup = fb.group({
      name: ['', [Validators.required, Validators.minLength(3),forbiddenNameValidator]],
      email: ['',Validators.email],
      // mobileNo: fb.array([fb.control('')]),
      // address: fb.group({
      //   street: [''],
      //   postalCode: [''],
      // }),

        password: ['',Validators.required],
       confirmpassword: ['',Validators.required],


      // reachedBy: [''],
      // reachedByOther: [''],
    }, {Validators: passwordMatchValidator});



  }

  ngOnInit(): void {



  }

  get name() {
    return this.userregisterformgroup.controls['name'];
  }

  // get mobileNoArr(): FormArray {
  //   return this.userregisterformgroup.controls['mobileNo'] as FormArray;
  // }

  // get reachedBy() {
  //   return this.userregisterformgroup.controls['reachedBy'];
  // }

  get password() {
    return this.userregisterformgroup.controls['password'];
  }

  get confirmpassword() {
    return this.userregisterformgroup.controls['confirmPassword'];
  }


  // addMobile(){
  //   this.mobileNoArr.push(this.fb.control(''));


  // }

  register(){
    this.userAuthservice.Register(this.userregisterformgroup.value)
    .subscribe(user=>{
    });
    this.toast.success({detail:"Registeration Success " ,duration:5000})



  }

  // updateReachedOtherValidaiton(){
  //   if (this.reachedBy.value == "Other")
  //   this.userregisterformgroup.controls['reachedByOther'].setValidators([Validators.required]);
  // else
  //   this.userregisterformgroup.controls['reachedByOther'].clearValidators();

  // this.userregisterformgroup.controls['reachedByOther'].updateValueAndValidity();

  // }



}
