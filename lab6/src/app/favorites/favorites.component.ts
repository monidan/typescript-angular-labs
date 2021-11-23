import { Component } from '@angular/core';

import { WeatherResponse } from '../interfaces/Responses';
import { FavoritesService } from '../favorites.service';

interface Favorite extends WeatherResponse {
  isFavorite: boolean;
}

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent {

  columnsToDisplay: string[] = ['City', 'Temperature (°C)', 'Humidity', 'Feels like (°C)', 'Visibility (kms)']
  favorites: Favorite[] = [];

  constructor(
    private FavoritesService: FavoritesService
  ) {
    this.FavoritesService.observableFavorites.subscribe(favorites => {
      this.favorites = favorites;
    })
  }

  removeFavorite(favorite: Favorite) {
    this.FavoritesService.removeFavorite(favorite);
  }
}
