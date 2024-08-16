import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NewslatterComponent } from '../../commonComponent/newslatter/newslatter.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,NewslatterComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  productList: any[] = [
    {
      src: 'assets/images/product-1.png',
      title: 'conditioner'
    },
    {
      src: 'assets/images/product-2.png',
      title: 'Shampoo'
    },
    {
      src: 'assets/images/product-3.png',
      title: 'hair mask/spa'
    },
    {
      src: 'assets/images/product-4.png',
      title: 'hair serum'
    },
    {
      src: 'assets/images/product-5.png',
      title: 'hair oils'
    },
    {
      src: 'assets/images/product-6.png',
      title: 'face mask'
    },
    {
      src: 'assets/images/product-7.png',
      title: 'face wash'
    },
    {
      src: 'assets/images/product-8.png',
      title: 'face srcub'
    },
    {
      src: 'assets/images/product-9.png',
      title: 'face serum'
    },
    {
      src: 'assets/images/product-10.png',
      title: 'cream'
    },
    {
      src: 'assets/images/product-11.png',
      title: 'Body Wash'
    },
    {
      src: 'assets/images/product-12.png',
      title: 'Body Lotion'
    },
    {
      src: 'assets/images/product-13.png',
      title: 'Gel'
    },
    {
      src: 'assets/images/product-14.png',
      title: 'Shower Gel'
    },
    {
      src: 'assets/images/product-15.png',
      title: 'Body Butter'
    },
    {
      src: 'assets/images/product-16.png',
      title: 'Lip Balm'
    },
    {
      src: 'assets/images/product-17.png',
      title: 'Intimate wash'
    },
    {
      src: 'assets/images/product-18.png',
      title: 'Facial Kit'
    },
    {
      src: 'assets/images/product-19.png',
      title: "Men's Grooming"
    },
    {
      src: 'assets/images/product-20.png',
      title: 'Hair Treatment'
    },
    {
      src: 'assets/images/product-21.png',
      title: 'Baby Care'
    },
    {
      src: 'assets/images/product-22.png',
      title: 'Sunsrceen'
    },
    {
      src: 'assets/images/product-23.png',
      title: 'Face Toner'
    }
  ];
}
