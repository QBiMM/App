using TravelApp.Samples;
using Xunit;

namespace TravelApp.EntityFrameworkCore.Domains;

[Collection(TravelAppTestConsts.CollectionDefinitionName)]
public class EfCoreSampleDomainTests : SampleDomainTests<TravelAppEntityFrameworkCoreTestModule>
{

}
