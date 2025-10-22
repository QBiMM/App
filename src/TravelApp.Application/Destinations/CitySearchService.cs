using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Drawing.Text;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Json;
using System.Text;
using System.Text.Json.Serialization;
using Volo.Abp.ObjectMapping;
using System.Threading.Tasks;
using Volo.Abp;
using Volo.Abp.Application.Services;
using Volo.Abp.DependencyInjection;
using static System.Net.WebRequestMethods;

namespace TravelApp.Destinations
{
    using System.Collections.Generic;
    using System.Text.Json.Serialization;

    using System.Collections.Generic;
    using System.Text.Json.Serialization;

    // --- Clases Modelo para la Respuesta de Geoapify Geocoding API ---

    // 1. La clase Raíz (representa todo el JSON)
    // Nota: La propiedad principal ahora se llama "results" en lugar de "features"
    public class GeoapifyGeocodeResponse
    {
        [JsonPropertyName("results")]
        public List<ResultData> Results { get; set; }
    }

    // 2. Clase para cada objeto en el array "results"
    // Esta clase contiene toda la información que nos interesa
    public class ResultData
    {
        [JsonPropertyName("country")]
        public string Country { get; set; }

        [JsonPropertyName("country_code")]
        public string CountryCode { get; set; }

        [JsonPropertyName("city")]
        public string City { get; set; }

        [JsonPropertyName("lon")]
        public double Lon { get; set; }

        [JsonPropertyName("lat")]
        public double Lat { get; set; }

        // Objeto anidado "timezone"
        [JsonPropertyName("timezone")]
        public Timezone Timezone { get; set; }

        // Puedes añadir más propiedades si las necesitas (formatted, rank, etc.)
    }

    // 3. Clase para el objeto anidado "timezone" (opcional, pero buena práctica)
    public class Timezone
    {
        [JsonPropertyName("name")]
        public string Name { get; set; }
    }
    
    [RemoteService(IsEnabled = false)]
    public class CitySearchService : ApplicationService, ICitySearchService, ITransientDependency
    {
        private readonly IHttpClientFactory _httpClientFactory;
        private readonly IObjectMapper _objectMapper;
        private readonly ILogger<CitySearchService> _logger;
        public CitySearchService(IHttpClientFactory httpClientFactory, IObjectMapper objectMapper, ILogger<CitySearchService> logger)
        {
            _httpClientFactory = httpClientFactory;
            _objectMapper = objectMapper;
            _logger = logger;
        }
        private static readonly string apiKey = "361fe31c015e4ed090fbdb6c767b3ad1";
        public async Task<List<DestinationDto>> SearchAsync(string cityName)
        {
            if (string.IsNullOrWhiteSpace(cityName))
            {
                return new List<DestinationDto>();
            }
                var client = _httpClientFactory.CreateClient("Geoapify");
                string fullUrl = $"https://api.geoapify.com/v1/geocode/search/?text={Uri.EscapeDataString(cityName)}&format=json&apiKey={apiKey}";
                _logger.LogInformation("Llamando a la API: {FullUrl}", fullUrl);
                Console.WriteLine($"Llamando a la API: {fullUrl}");
                var response = await client.GetAsync(fullUrl);
                response.EnsureSuccessStatusCode();
                var apiResponse = await response.Content.ReadFromJsonAsync<GeoapifyGeocodeResponse>();
                var resultDataList = apiResponse?.Results ?? new List<ResultData>();
                return ObjectMapper.Map<List<ResultData>, List<DestinationDto>>(resultDataList);
        }
    }
}