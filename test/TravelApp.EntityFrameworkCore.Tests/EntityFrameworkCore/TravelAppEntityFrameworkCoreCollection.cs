using Xunit;

namespace TravelApp.EntityFrameworkCore;

[CollectionDefinition(TravelAppTestConsts.CollectionDefinitionName)]
public class TravelAppEntityFrameworkCoreCollection : ICollectionFixture<TravelAppEntityFrameworkCoreFixture>
{

}
