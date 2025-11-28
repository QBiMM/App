using System;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace TravelApp.Destinations
{
    public interface IRatingAppService : IApplicationService
    {
        Task<RatingDto> GetAsync(Guid id);
        Task<PagedResultDto<RatingDto>> GetListAsync(PagedAndSortedResultRequestDto input);
        Task<RatingDto> CreateUpdateRatingDto(RatingDto input);
        Task DeleteAsync(Guid id);
    }
}