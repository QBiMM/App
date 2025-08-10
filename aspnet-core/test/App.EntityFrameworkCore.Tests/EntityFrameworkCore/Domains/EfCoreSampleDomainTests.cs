using App.Samples;
using Xunit;

namespace App.EntityFrameworkCore.Domains;

[Collection(AppTestConsts.CollectionDefinitionName)]
public class EfCoreSampleDomainTests : SampleDomainTests<AppEntityFrameworkCoreTestModule>
{

}
