using TravelApp.Samples;
using Xunit;

namespace TravelApp.EntityFrameworkCore.Applications;

[Collection(TravelAppTestConsts.CollectionDefinitionName)]
public class EfCoreSampleAppServiceTests : SampleAppServiceTests<TravelAppEntityFrameworkCoreTestModule>
{

}
