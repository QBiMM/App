using System;
using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace TravelApp.EntityFrameworkCore;

/* This class is needed for EF Core console commands
 * (like Add-Migration and Update-Database commands) */
public class TravelAppDbContextFactory : IDesignTimeDbContextFactory<TravelAppDbContext>
{
    public TravelAppDbContext CreateDbContext(string[] args)
    {
        var configuration = BuildConfiguration();
        
        TravelAppEfCoreEntityExtensionMappings.Configure();

        var builder = new DbContextOptionsBuilder<TravelAppDbContext>()
            .UseSqlServer(configuration.GetConnectionString("Default"));
        
        return new TravelAppDbContext(builder.Options);
    }

    private static IConfigurationRoot BuildConfiguration()
    {
        var builder = new ConfigurationBuilder()
            .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), "../TravelApp.DbMigrator/"))
            .AddJsonFile("appsettings.json", optional: false);

        return builder.Build();
    }
}
