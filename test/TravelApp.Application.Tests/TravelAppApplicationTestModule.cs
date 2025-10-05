using Volo.Abp.Modularity;

namespace TravelApp;

[DependsOn(
    typeof(TravelAppApplicationModule),
    typeof(TravelAppDomainTestModule)
)]
public class TravelAppApplicationTestModule : AbpModule
{

}
