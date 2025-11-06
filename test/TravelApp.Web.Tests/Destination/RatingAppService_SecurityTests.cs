using Shouldly;
using System.Net;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;
using System;
using TravelApp;
using Volo.Abp.Modularity;
using Xunit;
using System.Net.Http.Json;
using TravelApp.Destinations;
namespace TravelApp.Destination
{
    public class RatingAppService_SecurityTests : TravelAppWebTestBase
    {
        public RatingAppService_SecurityTests()
        {
            Client.DefaultRequestHeaders.Authorization = null;
        }
        [Fact]
        public async Task Should_Return_401_When_No_Token_Is_Provided()
        {
            var ratingDto = new RatingDto
            {
                Id = Guid.Empty,
                DestinationId = Guid.NewGuid(),
                Stars = 5,
                Comment = "lindo muy muy muy muy"
            };
            var apiUrl = "/api/app/rating/update-rating-dto";
            var response = await Client.PostAsJsonAsync(apiUrl, ratingDto);
            response.StatusCode.ShouldBe(HttpStatusCode.Forbidden);
        }

    }
}
