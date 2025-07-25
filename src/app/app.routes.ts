import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'products/:id',
        loadComponent: () => import('./products/products').then(m => m.Products)
    },
    {
        path: 'fav-list', loadComponent: () => import('./fav-list/fav-list').then(m => m.FavList)
    },
    {
        path: 'basket', loadComponent: () => import('./basket/basket').then(m => m.Basket)
    },
    {
        path: 'login', loadComponent: () => import('./login/login').then(m => m.Login)
    },
    {
        path: 'register', loadComponent: () => import('./register/register').then(m => m.Register)
    },
    {
        path: '', loadComponent: () => import('./products-list/products-list').then(m => m.ProductsList)
    }
];
