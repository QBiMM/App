using System;

namespace TravelApp.Destinations;

public class UserOwned : IUserOwned
{
    public Guid UserId { get; set; }
}