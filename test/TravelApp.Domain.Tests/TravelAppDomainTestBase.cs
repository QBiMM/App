using Volo.Abp.Modularity;

namespace TravelApp;

/* Inherit from this class for your domain layer tests. */
public abstract class TravelAppDomainTestBase<TStartupModule> : TravelAppTestBase<TStartupModule>
    where TStartupModule : IAbpModule
{

}
