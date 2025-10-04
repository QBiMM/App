using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Services;

namespace TravelApp.Destinations
{
    public interface ICitySearchService 
    {
        Task<List<DestinationDto>> SearchAsync(string cityName);
    }
}
