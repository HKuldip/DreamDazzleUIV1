import { Component } from '@angular/core';
import { NewslatterComponent } from '../../commonComponent/newslatter/newslatter.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [NewslatterComponent, CommonModule,FormsModule],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactusComponent {

  contactUs: any = {
    name: "",
    phone: "",
    email: "",
    message: "",
  }
}
