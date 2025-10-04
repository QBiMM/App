using System;
using Volo.Abp.Domain.Entities.Auditing;

namespace TravelApp.Destinations;

public class Destination : AuditedAggregateRoot<Guid>
{
    public string Name { get; set; }
    
    public Guid Id { get; set; }

    public string  ImageURL { get; set; }

    public string Latitude { get; set; }
    
    public string Longitude { get; set; }
}