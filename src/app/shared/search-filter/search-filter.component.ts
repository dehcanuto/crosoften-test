import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, finalize, of, Subject, switchMap, takeUntil, tap } from 'rxjs';

import { CountryType } from '../../models/country.model';
import { CountryRegionsType } from '../../models/regions.model';
import { CountriesService } from '../../services/countries.service';
import { RegionEnum } from '../../enums/region.enum';

@Component({
  selector: 'app-search-filter',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './search-filter.component.html',
  styleUrl: './search-filter.component.scss'
})
export class SearchFilterComponent {
  public  loading = true;
  public  form!: FormGroup;
  public  regions: CountryRegionsType[] = [];
  private destroyed$ = new Subject<void>();

  @Output()
  public updateCountries = new EventEmitter<CountryType[]>();

  constructor(private service: CountriesService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
    this.formFieldListeners();

    this.regions = Object.values(RegionEnum).map(value => ({
      value,
      label: `${value[0].toUpperCase()}${value.slice(1)}`,
    }));
  }

  private initForm() {
    this.form = this.fb.group({
      search: null,
      filter: null,
    });
  }

  private formFieldListeners() {
    this.form
      .get('search')
      ?.valueChanges.pipe(
        debounceTime(500),
        tap(() => this.loading = true),
        switchMap(search => this.service.getCountry(search)),
        takeUntil(this.destroyed$),
      )
      .subscribe(countries => {
        this.updateCountries.emit(countries);
        this.loading = false;
      });

    this.form
      .get('filter')
      ?.valueChanges.pipe(
        debounceTime(500),
        tap(() => {
          this.loading = true;
        }),
        switchMap(region =>
          this.service.getCountryByRegion(region).pipe(
            finalize(() => this.loading = false),
          ),
        ),
        takeUntil(this.destroyed$),
      )
      .subscribe(countries => {
        this.updateCountries.emit(countries);
      });
  }
}
