using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Services;

namespace TravelApp.Destinations
{
    public class CitySearchAppService : ApplicationService
    {
        private readonly ICitySearchService _citySearchService;
        public CitySearchAppService(ICitySearchService citySearchService)
        {
            _citySearchService = citySearchService;
        }
        public async Task<List<DestinationDto>> SearchAsync(string cityName)
        {
            return await _citySearchService.SearchAsync(cityName);
        }
    }
}
