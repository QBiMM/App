using System;
using TravelApp.Destinations;
using Volo.Abp.Domain.Entities.Auditing;

namespace TravelApp.Favorites
{
    public class TrackedDestination : AuditedAggregateRoot<Guid>, IUserOwned
    {
        public Guid UserId { get; set; }
        public Guid DestinationId { get; set; }

        public virtual Destination Destination { get; protected set; } 

        protected TrackedDestination() { }

        public TrackedDestination(Guid id, Guid userId, Guid destinationId)
        {
            Id = id;
            UserId = userId;
            DestinationId = destinationId;
        }
    }
}
