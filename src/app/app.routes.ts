import { Routes } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { LayoutComponent } from './Pages/layout/layout.component';
import { HomeComponent } from './Pages/home/home.component';
import { AboutComponent } from './Pages/about/about.component';
import { ProductsComponent } from './Pages/products/products.component';
import { ShopComponent } from './Pages/shop/shop.component';
import { ContactusComponent } from './Pages/contactus/contactus.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: 'login',
        component: LoginComponent
    },

    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'home',
                component: HomeComponent
            },
            {
                path: 'about',
                component: AboutComponent
            },
            {
                path: 'products',
                component: ProductsComponent
            },
            {
                path: 'shop',
                component: ShopComponent
            },
            {
                path: 'contact-us',
                component: ContactusComponent
            },
        ]
    }
];
