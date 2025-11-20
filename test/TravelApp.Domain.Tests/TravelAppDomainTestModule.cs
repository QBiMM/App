using Volo.Abp.Modularity;

namespace TravelApp;

[DependsOn(
    typeof(TravelAppDomainModule),
    typeof(TravelAppTestBaseModule)
)]
public class TravelAppDomainTestModule : AbpModule
{

}
