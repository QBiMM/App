using System;
using System.ComponentModel.DataAnnotations;
using Volo.Abp.Domain.Entities;
using Volo.Abp.Domain.Entities.Auditing;

namespace TravelApp.Destinations;

public class Rating : AuditedAggregateRoot<Guid>, IUserOwned
{
    public int Stars { get; set; } = 1;

    [Required(AllowEmptyStrings = false)]
    public string Comment { get; set; }
    public DateTime Date { get; set; }
    public Guid UserId { get; set; }
    
    public Guid DestinationId { get; set; }
}