import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, NgOptimizedImage],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isUserChecked: boolean = true;
  imagePath: string = "../../assets/img/eye.jpg"

  loginObj: any = {
    email: "",
    Password: ""
  }

  Islogin() {

  }
  IsSignUp() {

  }
}
