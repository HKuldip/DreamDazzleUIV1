import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NewslatterComponent } from '../../commonComponent/newslatter/newslatter.component';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, NewslatterComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {

  productList: any[] = [
    {
      src: 'assets/images/shop-6.png',
      title: 'VITAMIN C SERUM FOR FACE',
      price: 349.99
    },
    {
      src: 'assets/images/shop-1.png',
      title: 'VITAMIN C SERUM FOR FACE',
      price: 349.99
    },
    {
      src: 'assets/images/shop-2.png',
      title: 'VITAMIN C SERUM FOR FACE',
      price: 349.99
    },
    {
      src: 'assets/images/shop-3.png',
      title: 'VITAMIN C SERUM FOR FACE',
      price: 349.99
    },
    {
      src: 'assets/images/shop-4.png',
      title: 'VITAMIN C SERUM FOR FACE',
      price: 349.99
    },
    {
      src: 'assets/images/shop-5.png',
      title: 'VITAMIN C SERUM FOR FACE',
      price: 349.99
    },
    {
      src: 'assets/images/shop-6.png',
      title: 'VITAMIN C SERUM FOR FACE',
      price: 349.99
    },
    {
      src: 'assets/images/shop-1.png',
      title: 'VITAMIN C SERUM FOR FACE',
      price: 349.99
    },
    {
      src: 'assets/images/shop-2.png',
      title: 'VITAMIN C SERUM FOR FACE',
      price: 349.99
    },
    {
      src: 'assets/images/shop-3.png',
      title: 'VITAMIN C SERUM FOR FACE',
      price: 349.99
    },
    {
      src: 'assets/images/shop-4.png',
      title: 'VITAMIN C SERUM FOR FACE',
      price: 349.99
    },
    {
      src: 'assets/images/shop-5.png',
      title: 'VITAMIN C SERUM FOR FACE',
      price: 349.99
    }

  ];

}
