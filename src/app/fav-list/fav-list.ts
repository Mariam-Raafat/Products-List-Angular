import { Component, inject } from '@angular/core';
import { FavListStore } from '../signal.store/singnal.store';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-fav-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './fav-list.html',
  styleUrl: './fav-list.scss'
})
export class FavList {
  favoriteList = inject(FavListStore)
}
