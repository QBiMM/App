import type { CreateUpdateDestinationDto, DestinationDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DestinationService {
  apiName = 'Default';
  

  conseguirTodosLosDestinosAsincrono = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, DestinationDto[]>({
      method: 'POST',
      url: '/api/app/destination/conseguir-todos-los-destinos-asincrono',
    },
    { apiName: this.apiName,...config });
  

  crearByInput = (input: CreateUpdateDestinationDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, DestinationDto>({
      method: 'POST',
      url: '/api/app/destination/crear',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  create = (input: CreateUpdateDestinationDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, DestinationDto>({
      method: 'POST',
      url: '/api/app/destination',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/destination/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, DestinationDto>({
      method: 'GET',
      url: `/api/app/destination/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: PagedAndSortedResultRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<DestinationDto>>({
      method: 'GET',
      url: '/api/app/destination',
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: CreateUpdateDestinationDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, DestinationDto>({
      method: 'PUT',
      url: `/api/app/destination/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
