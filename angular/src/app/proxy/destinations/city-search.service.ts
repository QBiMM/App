import type { DestinationDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CitySearchService {
  apiName = 'Default';
  

  search = (cityName: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, DestinationDto[]>({
      method: 'POST',
      url: '/api/app/city-search/search',
      params: { cityName },
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
