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
}
