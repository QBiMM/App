using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace TravelApp.Destinations
{
    public interface IDestinationAppService :
        ICrudAppService<
        DestinationDto,
        Guid,
        PagedAndSortedResultRequestDto,
        CreateUpdateDestinationDto>
    {
        Task<DestinationDto> Crear(CreateUpdateDestinationDto input);
        Task<List<DestinationDto>> ConseguirTodosLosDestinosAsincrono();
    }
}