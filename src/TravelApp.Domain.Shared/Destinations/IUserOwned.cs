using System;

namespace TravelApp.Domain.Shared;

public interface IUserOwned
{
    Guid UserId { get; set; }
}