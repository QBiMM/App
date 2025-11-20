using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Volo.Abp;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Authorization;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Users;
using Shouldly;
using System.Text;
using TravelApp.Destinations;
using Volo.Abp.Modularity;
using Volo.Abp.ObjectMapping;
using AutoMapper;
using DestinationEntity = TravelApp.Destinations.Destination;
using Xunit;
using Volo.Abp.Domain.Entities;

namespace TravelApp.Destination
{
    public abstract class RatingAppService_UnitTests<TStartupModule> : TravelAppApplicationTestBase<TStartupModule>
            where TStartupModule : IAbpModule
    {
        private readonly IRatingAppService _ratingAppService;
        private readonly IRepository<Rating, Guid> _ratingRepository;
        private readonly IRepository<DestinationEntity, Guid> _destinationRepository;
        private readonly IObjectMapper _objectMapper;
        private readonly ICurrentUser _currentUser;
        protected RatingAppService_UnitTests()
        {
            _ratingAppService = GetRequiredService<IRatingAppService>();
            _objectMapper = GetRequiredService<IObjectMapper>();
            _destinationRepository = GetRequiredService<IRepository<DestinationEntity, Guid>>();
            _ratingRepository = GetRequiredService<IRepository<Rating, Guid>>();
            _currentUser = GetRequiredService<ICurrentUser>();
        }
        private async Task<DestinationEntity> CreateTestDestinationAsync(string name)
        {
            return await _destinationRepository.InsertAsync(
                new DestinationEntity { Name = name, Country = "unPais", Id = Guid.Empty, ImageURL = "ImageUrl", Latitude = "Lat", Longitude = "Long" },
                autoSave: true
                );
        }

        [Fact]
        public async Task Should_Create_A_Valid_Rating()
        {
            var destintation = await CreateTestDestinationAsync("Test Destination");
            var input = new RatingDto
            {
                Id = Guid.Empty,
                DestinationId = destintation.Id,
                Stars = 5,
                Comment = "exitoso maravilloso bello calmante tranquilizador"
            };
            var resultDto = await _ratingAppService.CreateUpdateRatingDto(input);
            resultDto.Id.ShouldNotBe(Guid.Empty);
            resultDto.Stars.ShouldBe(5);
            resultDto.UserId.ShouldBe(_currentUser.GetId());
            var ratingFromDb = await _ratingRepository.GetAsync(resultDto.Id);
            ratingFromDb.Comment.ShouldBe("exitoso maravilloso bello calmante tranquilizador");
        }
        [Fact]
        public async Task Should_Handle_Duplicate_Ratings()
        {
            var destination = await CreateTestDestinationAsync("Duplicate destinations");
            var input1 = new RatingDto
            {
                Id = Guid.Empty,
                DestinationId = destination.Id,
                Stars = 4,
                Comment = "lindo tierno esperanzador inquietante solemne"
            };
            await _ratingAppService.CreateUpdateRatingDto(input1);
            var input2 = new RatingDto
            {
                Id = Guid.Empty,
                DestinationId = destination.Id,
                Stars = 1,
                Comment = "feo malo incomodo intranquilo desolador"
            };
            var exception = await Should.ThrowAsync<UserFriendlyException>(async () => await _ratingAppService.CreateUpdateRatingDto(input2));
            exception.Message.ShouldBe("Ya calificaste este destino.");
        }
        [Fact]
        public async Task Should_Delete_Rating()
        {
            var destination = await CreateTestDestinationAsync("Destination to delete rating");
            var input = new RatingDto
            {
                Id = Guid.Empty,
                DestinationId = destination.Id,
                Stars = 3,
                Comment = "efimera basura perdida olvidada escondida"
            };
            var createdRating = await _ratingAppService.CreateUpdateRatingDto(input);
            await _ratingAppService.DeleteAsync(createdRating.Id);
            var exception = await Should.ThrowAsync<EntityNotFoundException>(async () => await _ratingAppService.GetAsync(createdRating.Id));
            exception.Message.ShouldBe($"There is no such an entity. Entity type: {typeof(Rating)}, id: {createdRating.Id}");
        }
        [Fact]
        public async Task Should_Not_Create_Rating_With_Null_Comment()
        {
            var destination = await CreateTestDestinationAsync("Destination with a null comment");
            var input = new RatingDto
            {
                Id = Guid.Empty, 
                DestinationId = destination.Id,
                Stars = 5,
                Comment = null 
            };
            var exception = await Should.ThrowAsync<UserFriendlyException>(async () => await _ratingAppService.CreateUpdateRatingDto(input));
            exception.Message.ShouldBe("El comentario debe tener exactamente 5 palabras y cada palabra no debe exceder los 25 caracteres. Solo se aceptan letras.");

        }
        [Fact]
        public async Task Should_Not_Create_Rating_With_Empty_Comment()
        {
            var destination = await CreateTestDestinationAsync("Destination with an empty string comment");
            var input = new RatingDto
            {
                Id = Guid.Empty, 
                DestinationId = destination.Id,
                Stars = 5,
                Comment = "" 
            };
            var exception = await Should.ThrowAsync<UserFriendlyException>(async () => await _ratingAppService.CreateUpdateRatingDto(input));
            exception.Message.ShouldBe("El comentario debe tener exactamente 5 palabras y cada palabra no debe exceder los 25 caracteres. Solo se aceptan letras.");
        }
    }
}
