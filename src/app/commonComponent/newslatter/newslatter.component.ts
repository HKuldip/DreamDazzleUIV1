import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-newslatter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './newslatter.component.html',
  styleUrl: './newslatter.component.css'
})
export class NewslatterComponent {

  email: string = ""

  onSubscribe() {

  }

}
