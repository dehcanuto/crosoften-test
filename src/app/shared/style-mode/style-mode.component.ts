import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-style-mode',
  standalone: true,
  imports: [],
  templateUrl: './style-mode.component.html',
  styleUrl: './style-mode.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StyleModeComponent {
  public isDarkMode: boolean = false;

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    this.updateTheme();
  }

  updateTheme() {
    this.isDarkMode ?
      document.body.classList.add('dark-mode') :
      document.body.classList.remove('dark-mode');
  }
}
