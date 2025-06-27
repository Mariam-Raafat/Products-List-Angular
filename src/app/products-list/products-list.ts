import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { productService } from '../productService';
import { RouterModule } from '@angular/router';
import { FavListStore } from '../signal.store/singnal.store';

@Component({
  selector: 'app-products-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './products-list.html',
  styleUrl: './products-list.scss'
})
export class ProductsList implements OnInit {
  productsList!: any[];
  // constructor(private products:productService){}
  products = inject(productService);
  FavListStore = inject(FavListStore);

  ngOnInit(): void {
    this.products.getProducts().subscribe((data: any) => {
      this.productsList = data.products;
      console.log(data);


    })
  }
}
