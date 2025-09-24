using System.Threading.Tasks;

namespace TravelApp.Data;

public interface ITravelAppDbSchemaMigrator
{
    Task MigrateAsync();
}
