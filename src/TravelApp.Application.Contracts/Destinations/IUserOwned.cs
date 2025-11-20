using System;

namespace TravelApp.Destinations;

public interface IUserOwned
{
    Guid UserId { get; set; }
}