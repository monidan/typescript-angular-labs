import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

const API_LINK = 'https://countriesnow.space/api/v0.1/countries/cities';

interface Response {
  data?: string[];
}

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor(
    private http: HttpClient
  ) { }

  getCitiesOfCountry(country: string) {
    const data = { country: country };

    return this.http.post(API_LINK, { country: country });
  }
}
