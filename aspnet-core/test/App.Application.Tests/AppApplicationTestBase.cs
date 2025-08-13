using Volo.Abp.Modularity;

namespace App;

public abstract class AppApplicationTestBase<TStartupModule> : AppTestBase<TStartupModule>
    where TStartupModule : IAbpModule
{

}
