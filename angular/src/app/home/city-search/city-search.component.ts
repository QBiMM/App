import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CitySearchService } from '@proxy/destinations/city-search.service';
import { DestinationDto } from '@proxy/destinations/models'; 

@Component({
  selector: 'app-city-search',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.scss'] // o .css
})
export class CitySearchComponent {
  searchTerm: string = '';
  results: DestinationDto[] = [];
  isLoading = false;
  constructor(private citySearchService: CitySearchService) {}

  search() {
    if (!this.searchTerm.trim()) return;

    this.isLoading = true;
    this.citySearchService.search(this.searchTerm).subscribe({
      next: (data) => {
        this.results = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error buscando:', err);
        this.isLoading = false;
      }
    });
  }
}