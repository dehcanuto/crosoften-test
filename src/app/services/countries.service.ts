import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CountryType } from '../models/country.model';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private readonly API_URL = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  public getAllCountries(): Observable<CountryType[]> {
    return this.http.get<CountryType[]>(`${this.API_URL}/all`);
  }

  public getCountry(url: string): Observable<CountryType[]> {
    return this.http.get<CountryType[]>(`${this.API_URL}/name/${url}`);
  }

  public getCountryByCodes(codes: string): Observable<CountryType[]> {
    return this.http.get<CountryType[]>(`${this.API_URL}/alpha?codes=${codes}`);
  }
}
