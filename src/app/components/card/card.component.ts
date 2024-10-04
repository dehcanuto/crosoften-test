import { Component, Input } from '@angular/core';
import { CountryType } from '../../models/country.model';

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
}
