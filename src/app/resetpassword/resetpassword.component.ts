import { Component } from '@angular/core';
import { LoginServices } from '../Services/login.services';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-resetpassword',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './resetpassword.component.html',
  styleUrl: './resetpassword.component.css'
})
export class ResetpasswordComponent {
  constructor(private loginSrvices: LoginServices) { }

  
  resetpassword: any = {
    Token:"",
    email: "",
    NewPassword: "",
    ConfirmPassword:""
  }

  resetPasswords()
 {
  debugger
    this.loginSrvices.resetPassword(this.resetpassword).subscribe((res: any) => {
      if (res.isSuccess) {
        debugger
        alert(res.message)
      }
      else {
        alert(res.message)
      }
    })
  }
}
