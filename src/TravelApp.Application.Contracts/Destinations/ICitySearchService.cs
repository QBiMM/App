using System.Collections.Generic;
using System.Threading.Tasks;

namespace TravelApp.Destinations
{
    public interface ICitySearchService
    {
        Task<List<DestinationDto>> SearchAsync(string cityName);
    }
}