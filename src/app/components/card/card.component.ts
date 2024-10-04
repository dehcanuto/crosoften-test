import { Component, Input } from '@angular/core';
import { CountryType } from '../../models/country.model';
import { formatStringToSlug } from '../../misc/format';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input()
  public country!: CountryType;
  public url!: String;

  ngOnInit(): void {
    // optei para deixar o destina da página mais legível pro usuário.
    this.url = formatStringToSlug(this.country.name.common);
  }
}