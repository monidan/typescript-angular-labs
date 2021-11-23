import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CitiesService } from './cities.service';

import { WeatherResponse } from './interfaces/Responses';

// const API_LINK = 'https://www.metaweather.com/api/'
const API_KEY = '93efcc1944b1da60ef5a4753771ff017';
const API_LINK = (city: string) => `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  cities: string[] = [];
  weather: WeatherResponse[] = [];

  constructor(
    private http: HttpClient,
    private citiesService: CitiesService
  ) {}

  getCities() {
    return this.citiesService.getCitiesOfCountry('Ukraine')
      .toPromise()
      .then((cities: { data?: string[] }) => {
        this.cities = cities.data.slice(0, 10)
        return this.cities
      })
  }

  getWeather(): Promise<WeatherResponse[]> {
    return this.getCities()
      .then(cities => cities.map(city => this.http.get(API_LINK(city)).toPromise()))
      .then(cities => Promise.all(cities))
      .then((weather: WeatherResponse[]) => this.weather = weather)
  }
}
