using AutoMapper;
using System;
using System.Globalization;
using TravelApp.Destinations;

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
        CreateMap<ResultData, DestinationDto>()
            .ForMember(dest => dest.Id, opt => opt.MapFrom(src => Guid.NewGuid()))
            .ForMember(dest => dest.Name, opt => opt.MapFrom(src => src.City))
            .ForMember(dest => dest.ImageURL, opt => opt.Ignore())
            .ForMember(dest => dest.Latitude, opt => opt.MapFrom(src => src.Lat.ToString(CultureInfo.InvariantCulture)))
            .ForMember(dest => dest.Longitude, opt => opt.MapFrom(src => src.Lon.ToString(CultureInfo.InvariantCulture)));
        CreateMap <Destinations.Rating, Destinations.RatingDto>();
        CreateMap<Destinations.CreateUpdateRatingDto, Destinations.Rating>();
    
    }
}