using System;
using Volo.Abp.Application.Dtos;

namespace TravelApp.Destinations;

public class RatingDto : AuditedEntityDto<Guid>
{
    public int Stars { get; set; } = 1;
    public string Comment { get; set; }
    public DateTime Date { get; set; }
    public Guid UserId { get; set; }
    public Guid DestinationId { get; set; }
}