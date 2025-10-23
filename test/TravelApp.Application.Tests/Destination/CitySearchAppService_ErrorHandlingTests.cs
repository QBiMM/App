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
    public abstract class CitySearchAppService_ErrorHandlingTests<TStartupModule> : TravelAppApplicationTestBase<TStartupModule>
        where TStartupModule : IAbpModule
    {
        private readonly ICitySearchService _citySearchService;
        private readonly Mock<ICitySearchService> _mockProvider;
        protected CitySearchAppService_ErrorHandlingTests()
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
