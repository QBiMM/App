using System;
using Volo.Abp.Application.Dtos;

namespace TravelApp.Destinations
{
    public class DestinationDto : AuditedEntityDto<Guid>
    {
        public string Name { get; set; }

        public Guid Id { get; set; }

        public string  ImageURL { get; set; }

        public string Latitude { get; set; }
    
        public string Longitude { get; set; }
    }
}