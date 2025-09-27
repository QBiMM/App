using AutoMapper;

namespace TravelApp;

public class TravelAppApplicationAutoMapperProfile : Profile
{
    public TravelAppApplicationAutoMapperProfile()
    {
        /* You can configure your AutoMapper mapping configuration here.
         * Alternatively, you can split your mapping configurations
         * into multiple profile classes for a better organization. */
        CreateMap <Destinations.Destination, Destinations.DestinationDto> ();
        CreateMap <Destinations.CreateUpdateDestinationDto, Destinations.Destination> ();
    }
}
