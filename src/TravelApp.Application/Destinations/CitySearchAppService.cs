using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.ObjectMapping;
using Volo.Abp.Validation;

namespace TravelApp.Destinations
{
    public class CitySearchAppService : ApplicationService, ICitySearchService
    {
        private readonly ICitySearchService _citySearchService;
        public CitySearchAppService(ICitySearchService citySearchService)
        {
            _citySearchService = citySearchService;
        }
        public async Task<List<DestinationDto>> SearchAsync(string cityName)
        {
            if (string.IsNullOrWhiteSpace(cityName))
            {
                throw new AbpValidationException("City Name cannot be empty.");
            }

            return await _citySearchService.SearchAsync(cityName);

        }
    }
}
