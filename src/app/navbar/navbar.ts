import { Component, inject } from '@angular/core';
import { FavListStore } from '../signal.store/singnal.store';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  counter = inject(FavListStore)
}
