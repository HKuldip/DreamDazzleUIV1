import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { NewslatterComponent } from '../../commonComponent/newslatter/newslatter.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, NewslatterComponent, SlickCarouselModule, FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  slides = [
    { img: "assets/images/img1.png" },
    { img: "assets/images/img2.png" },
    { img: "assets/images/img3.png" },
    { img: "assets/images/img4.png" },
    { img: "assets/images/img5.png" },
    { img: "assets/images/img6.png" },
    { img: "assets/images/img1.png" },
    { img: "assets/images/img2.png" },
    { img: "assets/images/img3.png" },
  ];
  slideConfig = { "slidesToShow": 6, "slidesToScroll": 1 };

  slickInit(e: any) {
    console.log('slick initialized');
  }

  breakpoint(e: any) {
    console.log('breakpoint');
  }

  afterChange(e: any) {
    console.log('afterChange');
  }

  beforeChange(e: any) {
    console.log('beforeChange');
  }

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
