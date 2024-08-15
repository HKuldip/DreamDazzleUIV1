import { Component } from '@angular/core';
import { InstagramComponent } from '../../commonComponent/instagram/instagram.component';
import { NewslatterComponent } from '../../commonComponent/newslatter/newslatter.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NewslatterComponent,InstagramComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
