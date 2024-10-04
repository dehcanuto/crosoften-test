import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { finalize, map, of, switchMap } from 'rxjs';

import { CountriesService } from '../../services/countries.service';
import { CountryType } from '../../models/country.model';
import { formatSlugToString, formatNumber } from '../../misc/format';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DetailsComponent {
[x: string]: any;
  public loading: Boolean = true;
  public country!: CountryType;
  public borderCountries: string[] = [];

  constructor(private service: CountriesService, private route: ActivatedRoute) {}

  get currencies() {
    return this.country?.currencies ? Object.keys(this.country.currencies) : [];
  }

  get languages() {
    return this.country?.languages ? Object.values(this.country.languages) : [];
  }

  get population() {
    return formatNumber(this.country.population);
  }

  ngOnInit(): void {
    this.getCountry(formatSlugToString(this.route.snapshot.params['url']))
      .pipe(
        switchMap(country => {
          this.country = country;
          
          if (!country.borders?.length) return of([]);

          // Pega os border countries.
          return this.service
          .getCountryByCodes(country.borders.toString())
            .pipe(map(countries => countries.flatMap(country => country.name.common)));
        }),
      )
      .subscribe(borderCountries => this.borderCountries = borderCountries);
  }

  private getCountry(url: string) {
    return this.service.getCountry(url).pipe(
      map(([country]) => country),
      finalize(() => {
        this.loading = false;
      }),
    );
  }
}
