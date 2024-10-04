import { Component } from '@angular/core';
import { StyleModeComponent } from "../style-mode/style-mode.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [StyleModeComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  title = 'Where in the world?';
}
