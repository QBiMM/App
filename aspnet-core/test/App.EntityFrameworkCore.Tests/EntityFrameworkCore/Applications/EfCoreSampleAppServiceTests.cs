using App.Samples;
using Xunit;

namespace App.EntityFrameworkCore.Applications;

[Collection(AppTestConsts.CollectionDefinitionName)]
public class EfCoreSampleAppServiceTests : SampleAppServiceTests<AppEntityFrameworkCoreTestModule>
{

}
