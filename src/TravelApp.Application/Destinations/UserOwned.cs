using System;
using TravelApp.Domain.Shared;

namespace TravelApp.Destinations;

public class UserOwned : IUserOwned
{
    public Guid UserId { get; set; }
}