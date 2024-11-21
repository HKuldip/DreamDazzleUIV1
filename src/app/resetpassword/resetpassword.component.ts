import { Component } from '@angular/core';
import { LoginServices } from '../Services/login.services';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-resetpassword',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent {
  passwordFieldType: string = 'password';

  constructor(
    private route: ActivatedRoute, 
    private loginSrvices: LoginServices,
    private router: Router,
    private toastr: ToastrService 
  ) { }

  resetpassword: any = {
    email: "",
    NewPassword: "",
    ConfirmPassword: ""
  };

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.resetpassword.email = params['email']; 
    });
  }

  resetPasswords() {
    this.loginSrvices.resetPassword(this.resetpassword).subscribe((res: any) => {
      if (res.isSuccess) {
        this.toastr.success(res.message, 'Success'); 
        this.router.navigate(['/login']);
      } else {
        this.toastr.error(res.message, 'Error'); 
      }
    });
  }

  togglePasswordVisibility(): void {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }
}
