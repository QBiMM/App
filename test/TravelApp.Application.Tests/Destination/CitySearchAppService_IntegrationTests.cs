 using System;
using Volo.Abp.ObjectMapping;
using Volo.Abp.Modularity;
using System.Collections.Generic;
using Moq;
using Shouldly;
using System.Threading.Tasks;
using TravelApp.Destinations;
using Xunit;
using Volo.Abp.Validation;
using System.Globalization;
using System.Net.Http;
using System.Threading;
using Moq.Protected;
using Microsoft.Extensions.Logging;
using System.Drawing.Text;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;


namespace TravelApp.Destination
{
    public abstract class CitySearchAppService_IntegrationTest<TStartupModule> : TravelAppApplicationTestBase<TStartupModule>
        where TStartupModule : IAbpModule
    {
        private readonly ICitySearchService _citySearchService;
        private readonly IObjectMapper _objectMapper;
        protected CitySearchAppService_IntegrationTest()
        {
            _citySearchService = GetRequiredService<ICitySearchService>();
            _objectMapper = GetRequiredService<IObjectMapper>();
        }
        [Fact]
        [Trait("Category", "IntegrationTest")]
        public async Task SearchAsync_Should_Return_Real_Data()
        {
            var results = await _citySearchService.SearchAsync("Paris");
            results.ShouldNotBeNull();
            results.Count.ShouldBeGreaterThan(0);
            results[0].Name.ShouldContain("Par");
        }
        [Fact]
        [Trait("category", "integrationtest")]
        public void DTOs_Should_Map_Accordingly()
        {
            var source = new ResultData { City = "Buenos Aires", Lat = -34.61, Lon = -58.38 };
            var destination = _objectMapper.Map<ResultData, DestinationDto>(source);
            destination.ShouldNotBeNull();
            destination.Name.ShouldBe("Buenos Aires");
            destination.Latitude.ShouldBe(source.Lat.ToString(CultureInfo.InvariantCulture));
            destination.Longitude.ShouldBe(source.Lon.ToString(CultureInfo.InvariantCulture));
        }
    }
}
