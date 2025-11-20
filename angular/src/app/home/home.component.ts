import { Component, inject } from '@angular/core';
import { AuthService, LocalizationPipe } from '@abp/ng.core';
import { CitySearchComponent } from './city-search/city-search.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [CitySearchComponent]
})
export class HomeComponent {
  private authService = inject(AuthService);

  get hasLoggedIn(): boolean {
    return this.authService.isAuthenticated
  }

  login() {
    this.authService.navigateToLogin();
  }
}
