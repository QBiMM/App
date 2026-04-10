using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TravelApp.Destinations;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace TravelApp.Favorites
{
    public interface IFavoriteAppService :
        ICrudAppService<
        DestinationDto,
        Guid,
        CreateUpdateFavoriteDTO> 
    {
    }
}
