import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginServices } from '../../Services/login.services';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, NgOptimizedImage],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  isUserChecked: boolean = true;
  // imagePath: string = "assets/img/eye.jpg"
  passwordFieldType: string = 'password';

  constructor(private loginSrvices: LoginServices) { }

  loginObj: any = {
    username: "",
    Password: ""
  }

  signUpForm: any = {
    FirstName: "",
    LastName: "",
    Email: ""
  }


  Islogin() {
    this.loginSrvices.UserLogin(this.loginObj).subscribe((res: any) => {
      if (res.isSuccess) {
        alert(res.message)
      }
      else {
        alert(res.message)
      }
    })
  }
  IsSignUp() {
  
    this.loginSrvices.addUser(this.signUpForm).subscribe((res: any) => {
      if (res.isSuccess) {
      
        alert(res.message)
      }
      else {
        alert(res.message)
      }
    })
  }
  VerifyEmail() {

    this.loginSrvices.veryfyEmail(`?Email=${this.signUpForm.Email}`).subscribe((res: any) => {
      if (res.isSuccess) {
      
        alert(res.message)
      }
      else {
        alert(res.message)
      }
    })
  }
  forgotPassword()
  {
    
    this.loginSrvices.ForgotPassword(`?Email=${this.loginObj.username}`).subscribe((res: any) => {
      if (res.isSuccess) {
      
        alert(res.message)
      }
      else {
        alert(res.message)
      }
    })
  }
  togglePasswordVisibility(): void {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }
}
