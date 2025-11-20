using TravelApp.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.Modularity;

namespace TravelApp.DbMigrator;

[DependsOn(
    typeof(AbpAutofacModule),
    typeof(TravelAppEntityFrameworkCoreModule),
    typeof(TravelAppApplicationContractsModule)
)]
public class TravelAppDbMigratorModule : AbpModule
{
}
