using System;
using System.Collections.Generic;
using System.Drawing.Text;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace TravelApp.Destinations
{
    public class CitySearchService : ICitySearchService
    {
        private static readonly string apiKey = "8777bcbfe5mshfe6bb145b724f38p1d2bc9jsn7c0a4051406a";
        private static readonly string baseUrl = "https://wft-geo-db.p.rapidapi.com/v1/geo/places/%7BplaceId%7D/distance?toPlaceId=Q60";
        private static readonly string apiHost = "geodb-cities.p.rapidapi.com";
        public async Task<List<DestinationDto>> SearchAsync(string cityName)
        {
            static async Task Main(string[] args)
            {
                Console.WriteLine("Enter the name of the city to search: ");
                string cityName = Console.ReadLine();
                await SearchCityAsync(cityName);
            }
            static async Task SearchCityAsync(string city)
            {
                using (HttpClient client = new HttpClient())
                {
                    client.DefaultRequestHeaders.Add("X-RapidAPI-Key", apiKey);
                    client.DefaultRequestHeaders.Add("X-RapidAPI-Host", apiHost);
                    string url = $"{baseUrl}/cities?namePrefix={Uri.EscapeDataString(city)}&limit=5";
                    HttpResponseMessage response = await client.GetAsync(url);
                    if (response.IsSuccessStatusCode)
                    {
                        string jsonResult = await response.Content.ReadAsStringAsync();
                        Console.WriteLine($"Result: {jsonResult}");
                    }
                    else
                    {
                        Console.WriteLine($"Error: {response.StatusCode}");
                    }

                }
            }
            return new List<DestinationDto>();
        }
    }
}
