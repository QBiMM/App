using System;
using System.Threading.Tasks;
using TravelApp.Favorites;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace TravelApp.Destinations
{
    public class FavoriteAppService :
    CrudAppService<
    Destination,
    DestinationDto,
    Guid,
    CreateUpdateFavoriteDTO>,
        IFavoriteAppService
    {
        public FavoriteAppService(IRepository<Destination, Guid> repository) 
            : base(repository)
        {
        }
    }

}
