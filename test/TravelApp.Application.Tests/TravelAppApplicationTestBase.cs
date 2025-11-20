using Volo.Abp.Modularity;

namespace TravelApp;

public abstract class TravelAppApplicationTestBase<TStartupModule> : TravelAppTestBase<TStartupModule>
    where TStartupModule : IAbpModule
{

}
