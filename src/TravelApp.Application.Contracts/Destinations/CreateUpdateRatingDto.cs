using System;

namespace TravelApp.Destinations;

public class CreateUpdateRatingDto 
{
    public int Stars { get; set; } = 1;
    public string Comment { get; set; }
    public DateTime Date { get; set; }
    public Guid Id { get; set; }
    public Guid UserId { get; set; }
}