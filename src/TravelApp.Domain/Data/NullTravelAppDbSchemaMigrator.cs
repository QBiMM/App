using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace TravelApp.Data;

/* This is used if database provider does't define
 * ITravelAppDbSchemaMigrator implementation.
 */
public class NullTravelAppDbSchemaMigrator : ITravelAppDbSchemaMigrator, ITransientDependency
{
    public Task MigrateAsync()
    {
        return Task.CompletedTask;
    }
}
