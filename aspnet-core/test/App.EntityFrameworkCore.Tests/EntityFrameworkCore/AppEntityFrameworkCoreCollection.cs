using Xunit;

namespace App.EntityFrameworkCore;

[CollectionDefinition(AppTestConsts.CollectionDefinitionName)]
public class AppEntityFrameworkCoreCollection : ICollectionFixture<AppEntityFrameworkCoreFixture>
{

}
