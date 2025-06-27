import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Products } from './products/products';
import { ProductsList } from './products-list/products-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Products, ProductsList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'fetch-api';
}
