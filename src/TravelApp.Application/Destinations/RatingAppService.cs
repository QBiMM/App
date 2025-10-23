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

namespace TravelApp.Destinations
{
    [Authorize]
    public class RatingAppService : CrudAppService<
            Rating,
            RatingDto,
            Guid,
            PagedAndSortedResultRequestDto,
            RatingDto>,
        IRatingAppService
    {
        private readonly ICurrentUser _currentUser;
        private readonly IRepository<Destination, Guid> _destinationRepository;

        public RatingAppService(
            IRepository<Rating, Guid> repository, 
            IRepository<Destination, Guid> destinationRepository,
            ICurrentUser currentUser) 
            : base(repository)
        {
            _currentUser = currentUser;
            _destinationRepository = destinationRepository;
        }

        // Método combinado Create/Update
        public async Task<RatingDto> CreateUpdateRatingDto(RatingDto input)
        {
            Rating rating;

            if (input.Id == Guid.Empty)
            {
                // Validar destino
                if (!await _destinationRepository.AnyAsync(d => d.Id == input.DestinationId))
                    throw new UserFriendlyException("El destino indicado no existe.");

                // Validar que el usuario no haya calificado ya este destino
                var existingRating = await Repository.FirstOrDefaultAsync(
                    r => r.UserId == _currentUser.GetId() && r.DestinationId == input.DestinationId
                );

                if (existingRating != null)
                {
                    throw new UserFriendlyException("Ya calificaste este destino.");
                }

                // Crear nuevo rating
                rating = ObjectMapper.Map<RatingDto, Rating>(input);
                rating.UserId = _currentUser.GetId();
                rating.Date = Clock.Now;

                rating = await Repository.InsertAsync(rating, autoSave: true);
            }
            else
            {
                // Actualizar existente
                rating = await Repository.GetAsync(input.Id);

                // Validar que solo el dueño pueda actualizar
                if (rating.UserId != _currentUser.GetId())
                    throw new AbpAuthorizationException("No podés modificar esta calificación.");

                ObjectMapper.Map(input, rating);
                rating = await Repository.UpdateAsync(rating, autoSave: true);
            }

            return ObjectMapper.Map<Rating, RatingDto>(rating);
        }

        // Eliminar por Id
        public override async Task DeleteAsync(Guid id)
        {
            await Repository.DeleteAsync(id);
        }

        // Obtener un rating por Id
        public override async Task<RatingDto> GetAsync(Guid id)
        {
            var rating = await Repository.GetAsync(id);
            return ObjectMapper.Map<Rating, RatingDto>(rating);
        }

        // Listado paginado y ordenado
        public override async Task<PagedResultDto<RatingDto>> GetListAsync(PagedAndSortedResultRequestDto input)
        {
            var queryable = await Repository.GetQueryableAsync();
            
            var totalCount = await AsyncExecuter.CountAsync(queryable);

            // Aplicar ordenamiento si existe
            if (!string.IsNullOrWhiteSpace(input.Sorting))
            {
                queryable = queryable.OrderByDescending(x => x.Date);
            }
            else
            {
                queryable = queryable.OrderByDescending(x => x.Date);
            }

            // Aplicar paginación
            var items = await AsyncExecuter.ToListAsync(
                queryable
                    .Skip(input.SkipCount)
                    .Take(input.MaxResultCount)
            );

            var dtoList = ObjectMapper.Map<List<Rating>, List<RatingDto>>(items);

            return new PagedResultDto<RatingDto>(
                totalCount,
                dtoList
            );
        }
    }
}