import { Component } from '@angular/core';
import { finalize, Subject, take } from 'rxjs';

import { CountryType } from '../../models/country.model';
import { CountryRegionsType } from '../../models/regions.model';
import { CountriesService } from '../../services/countries.service';
import { RegionEnum } from '../../enums/region.enum';
import { CardComponent } from "../../components/card/card.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public  loading: Boolean = true;
  public  countries!: CountryType[];
  public  regions: CountryRegionsType[] = [];
  private destroyed$ = new Subject<void>();
  
  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.getAllCountries().subscribe(countries => this.countries = countries);
    this.regions = Object.values(RegionEnum).map(value => ({
      value,
      label: value[0].toUpperCase() + value.slice(1),
    }));
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
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
