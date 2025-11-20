import type { AuditedEntityDto } from '@abp/ng.core';

export interface CreateUpdateDestinationDto {
  name?: string;
  country?: string;
  id?: string;
  imageURL?: string;
  latitude?: string;
  longitude?: string;
}

export interface DestinationDto extends AuditedEntityDto<string> {
  name?: string;
  country?: string;
  id?: string;
  imageURL?: string;
  latitude?: string;
  longitude?: string;
}

export interface RatingDto extends AuditedEntityDto<string> {
  stars: number;
  comment?: string;
  date?: string;
  userId?: string;
  destinationId?: string;
}
