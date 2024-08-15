import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { NewslatterComponent } from '../../commonComponent/newslatter/newslatter.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InstagramComponent } from '../../commonComponent/instagram/instagram.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ NewslatterComponent,InstagramComponent, SlickCarouselModule, FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  bestSeller: any[] = [
    {
      src: 'assets/images/skin.png',
      title: 'Skin Care'
    },
    {
      src: 'assets/images/hair.png',
      title: 'Hair Care'
    },
    {
      src: 'assets/images/oils.png',
      title: 'Essential Oils'
    },
    {
      src: 'assets/images/baby.png',
      title: 'Baby Care'
    },
    {
      src: 'assets/images/man.png',
      title: " Man's Grooming"
    },
    {
      src: 'assets/images/cosmetic.png',
      title: 'Color Cosmetic'
    },
  ]
}
