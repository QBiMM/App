using System;
using Volo.Abp.Application.Dtos;

namespace TravelApp.Destinations
{
    public class DestinationDto : AuditedEntityDto<Guid>
    {
        public string Name { get; set; }
    
        public string Country { get; set; }

        public Guid Id { get; set; }

        public string  ImageURL { get; set; }

        public float Latitude { get; set; }
    
        public float Longitude { get; set; }
    }
}