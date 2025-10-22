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
    public abstract class CitySearchAppService_MockTests<TStartupModule> : TravelAppApplicationTestBase<TStartupModule>
        where TStartupModule : IAbpModule
    {
        [Fact]
        public async Task SearchAsync_Should_Return_Results()
        {
            var mockService = new Mock<ICitySearchService>();
            var expectedResults = new List<DestinationDto>
            {
                new DestinationDto { Id = Guid.NewGuid(), Name = "Paris", Latitude="48.85", Longitude="2.35", ImageURL="aParisImage"}
            };
            mockService.Setup(s => s.SearchAsync("Par")).ReturnsAsync(expectedResults);
            var appService = new CitySearchAppService(mockService.Object);
            var results = await appService.SearchAsync("Par");
            results.ShouldNotBeNull();
            results.Count.ShouldBe(1);
            results[0].Name.ShouldBe("Paris");

        }
        [Fact]
        public async Task SearchAsync_Should_Return_Empty_When_There_Are_No_Results()
        {
            var mockService = new Mock<ICitySearchService>();
            var expectedResults = new List<DestinationDto>();
            mockService.Setup(s => s.SearchAsync("Wakanda")).ReturnsAsync(expectedResults);
            var appService = new CitySearchAppService(mockService.Object);
            var results = await appService.SearchAsync("Wakanda");
            results.ShouldNotBeNull();
            results.Count.ShouldBe(0);
        }
        [Fact]
        public async Task SearchAsync_Should_Return_Error_If_Request_Is_Invalid()
        {
            var mockService = new Mock<ICitySearchService>();
            mockService.Setup(s => s.SearchAsync(It.Is<string>(q => string.IsNullOrWhiteSpace(q)))).ThrowsAsync(new ArgumentException("City Name cannot be empty "));
            var appService = new CitySearchAppService(mockService.Object);
            await Should.ThrowAsync<AbpValidationException>(async () => await appService.SearchAsync(""));
            await Should.ThrowAsync<AbpValidationException>(async () => await appService.SearchAsync("   "));
            await Should.ThrowAsync<AbpValidationException>(async () => await appService.SearchAsync(null));
        }
    }
    public abstract class ICitySearchAppService_IntegrationTest<TStartupModule> : TravelAppApplicationTestBase<TStartupModule>
        where TStartupModule : IAbpModule
    {
        private readonly ICitySearchService _citySearchService;
        private readonly IObjectMapper _objectMapper;
        protected ICitySearchAppService_IntegrationTest()
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
    public abstract class CitySearchAppService_ErrorHandlingTest<TStartupModule> : TravelAppApplicationTestBase<TStartupModule>
        where TStartupModule : IAbpModule
    {
        private readonly ICitySearchService _citySearchService;
        private readonly Mock<ICitySearchService> _mockProvider;
        protected CitySearchAppService_ErrorHandlingTest()
        {
            _citySearchService = GetRequiredService<ICitySearchService>();
            _mockProvider = GetRequiredService<Mock<ICitySearchService>>();
        }
        protected override void AfterAddApplication(IServiceCollection services)
        {
            var mockProvider = new Mock<ICitySearchService>();
            services.Replace(ServiceDescriptor.Singleton(mockProvider.Object));
            services.AddSingleton(mockProvider);
        }
        [Fact]
        [Trait("category", "IntegrationTest")]
        public async Task SearchAsync_Network_Error_Should_Return_Empty_List()
        {
            _mockProvider
                .Setup(p => p.SearchAsync(It.IsAny<string>()))
                .ThrowsAsync(new HttpRequestException("Network error"));

            var service = new CitySearchAppService(_mockProvider.Object);
            var result = await service.SearchAsync("AnyCity");

            result.ShouldNotBeNull();
            result.Count.ShouldBe(0);
        }
    }
}
