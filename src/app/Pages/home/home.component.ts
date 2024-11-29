import { Component, OnInit, OnDestroy } from '@angular/core';
import { NewslatterComponent } from '../../commonComponent/newslatter/newslatter.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InstagramComponent } from '../../commonComponent/instagram/instagram.component';
import { LoginServices } from '../../Services/login.services';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NewslatterComponent, InstagramComponent, SlickCarouselModule, FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('carouselAnimation', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('1300ms', style({ opacity: 1 }))
      ]),
      transition('* => void', [
        animate('1300ms', style({ opacity: 0 }))
        
      ])
    ])
  ]
  
})
export class HomeComponent implements OnInit, OnDestroy {
  Allcategory: any[] = [];
  paginatedCategories: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 3;
  totalPages: number = 1;
  dots: number[] = [];
  autoScrollInterval: any;

  constructor(
    private loginServices: LoginServices,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.GetAll();
    this.autoScrollInterval = setInterval(() => {
      this.nextPage();
    }, 10000);
  }

  ngOnDestroy(): void {
    if (this.autoScrollInterval) {
      clearInterval(this.autoScrollInterval);
    }
  }

  GetAll() {
    this.loginServices.getall().subscribe((res: any) => {
      if (res.isSuccess) {
        this.Allcategory = res.httpResponse;
        this.totalPages = Math.ceil(this.Allcategory.length / this.itemsPerPage);
        this.updatePaginatedItems();
      } else {
        this.toastr.error(res.message);

      }
    });
  }

  updatePaginatedItems(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedCategories = this.Allcategory.slice(startIndex, endIndex);
    this.dots = new Array(this.totalPages).fill(0);
    this.scrollToCurrentPage();
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePaginatedItems();
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    } else {
      this.currentPage = 1;
    }
    this.updatePaginatedItems();
  }

  private scrollToCurrentPage(): void {
    const elementId = `page-${this.currentPage}`;
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
