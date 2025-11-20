using Shouldly;
using System;
using System.Security.Claims;
using System.Threading.Tasks;
using TravelApp.Destinations;
using Volo.Abp;
using Volo.Abp.Authorization;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Modularity;
using Volo.Abp.Security.Claims;
using Volo.Abp.Users;
using Xunit;
using DestinationEntity = TravelApp.Destinations.Destination;


namespace TravelApp.Destination
{
    public abstract class RatingAppService_IntegrationTests<TStartupModule> : TravelAppApplicationTestBase<TStartupModule>
            where TStartupModule : IAbpModule
    {
        private readonly IRatingAppService _ratingAppService;
        private readonly ICurrentPrincipalAccessor _currentPrincipalAccessor;
        private readonly IRepository<Rating, Guid> _ratingRepository;
        private readonly IRepository<DestinationEntity, Guid> _destinationRepository;
        private readonly ICurrentUser _currentUser;
        protected RatingAppService_IntegrationTests()
        {
            _ratingAppService = GetRequiredService<IRatingAppService>();
            _destinationRepository = GetRequiredService<IRepository<DestinationEntity, Guid>>();
            _ratingRepository = GetRequiredService<IRepository<Rating, Guid>>();
            _currentUser = GetRequiredService<ICurrentUser>();
            _currentPrincipalAccessor = GetRequiredService<ICurrentPrincipalAccessor>();
        }
        private async Task<DestinationEntity> CreateTestDestinationAsync(string name, string country)
        {
            return await _destinationRepository.InsertAsync(
                new DestinationEntity { Name = name, Country = country, Id = Guid.Empty, ImageURL = "ImageUrl", Latitude = "Lat", Longitude = "Long" },
                autoSave: true
                );
        }
        private async Task<RatingDto> CreateRatingAsCurrentUserAsync(Guid destId, string comment)
        {
            var input = new RatingDto
            {
                Id = Guid.Empty,
                DestinationId = destId,
                Stars = 5,
                Comment = comment
            };
            return await _ratingAppService.CreateUpdateRatingDto(input);
        }
        [Fact]
        public async Task Should_Not_Allow_Updating_Another_Users_Rating()
        {
            var destination = await CreateTestDestinationAsync("Destino 1", "pais 1");
            Guid ratingIdOfUserA;
            var useerAId = Guid.NewGuid();
            var userAemail = "user_a@test.com";
            var userAName = "user_a";
            var claimsA = new ClaimsPrincipal(
                new ClaimsIdentity(
                    new Claim[]
                    {
                        new Claim(AbpClaimTypes.UserId, useerAId.ToString()),
                        new Claim(AbpClaimTypes.Email, userAemail),
                        new Claim(AbpClaimTypes.UserName, userAName)
                    }
                    )
                );
            using (_currentPrincipalAccessor.Change(claimsA))
            {
                var ratingDtoA = await CreateRatingAsCurrentUserAsync(destination.Id, "Comentario de User A mala");
                ratingIdOfUserA = ratingDtoA.Id;
            }
            var userBId = Guid.NewGuid();
            var userBEmail = "user_b@test.com";
            var userBName = "user_b";
            var updateInput = new RatingDto
            {
                Id = ratingIdOfUserA,
                DestinationId = destination.Id,
                Stars = 4,
                Comment = "Comentario de User B Apa"
            };
            var claimsB = new ClaimsPrincipal(
                new ClaimsIdentity(
                    new Claim[]
                    {
                        new Claim(AbpClaimTypes.UserId, userBId.ToString()),
                        new Claim(AbpClaimTypes.Email, userBEmail),
                        new Claim(AbpClaimTypes.UserName, userBName)
                    }
                    )
                );
            using (_currentPrincipalAccessor.Change(claimsB))
            {
                var exception = await Should.ThrowAsync<AbpAuthorizationException>(async () =>
                {
                    await _ratingAppService.CreateUpdateRatingDto(updateInput);
                }); 
                exception.Message.ShouldBe("No podés modificar esta calificación.");
            }


        }

    
    
    }
}

