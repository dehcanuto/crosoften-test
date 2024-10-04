import { Component, EventEmitter } from '@angular/core';
import { finalize, Subject, take } from 'rxjs';

import { CountryType } from '../../models/country.model';
import { CountryRegionsType } from '../../models/regions.model';
import { CountriesService } from '../../services/countries.service';
import { RegionEnum } from '../../enums/region.enum';
import { CardComponent } from "../../components/card/card.component";
import { SearchFilterComponent } from "../../shared/search-filter/search-filter.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, SearchFilterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public  loading: Boolean = true;
  public  countries!: CountryType[];
  private destroyed$ = new Subject<void>();
  
  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.getAllCountries().subscribe(countries => this.countries = countries);
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  filterCoutries(countriesUpdate: CountryType[]): void {
    this.countries = countriesUpdate;
  }

  private getAllCountries() {
    return this.countriesService.getAllCountries().pipe(
      finalize(() => {
        this.loading = false;
      }),
      take(1),
    );
  }
}
