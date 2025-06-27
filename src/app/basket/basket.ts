import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FavListStore } from '../signal.store/singnal.store';

@Component({
  selector: 'app-basket',
  imports: [CommonModule,RouterModule],
  templateUrl: './basket.html',
  styleUrl: './basket.scss'
})
export class Basket {
shopList = inject(FavListStore)
}
