using Microsoft.Extensions.DependencyInjection;
using TravelApp.Destinations; // <-- Asegúrate de tener el using a tu carpeta de servicios
using Volo.Abp.Modularity;
using System;

namespace TravelApp
{
    [DependsOn(
        typeof(TravelAppApplicationModule), // Depende del módulo principal de la aplicación
        typeof(TravelAppTestBaseModule)     // Depende de la base de tests
    )]
    public class TravelAppApplicationTestModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            var configuration = context.Services.GetConfiguration();

            // 1. Configuración del HttpClient para Geoapify
            context.Services.AddHttpClient("Geoapify", client =>
            {
                client.BaseAddress = new Uri("https://api.geoapify.com/");
            });

            // 2. Registro de tu servicio para que pueda ser inyectado en los tests
            // Le dice al sistema: cuando un test pida un 'ICitySearchProvider', 
            // entrégale una instancia de 'GeoapifySearchProvider'.
            context.Services.AddTransient<ICitySearchService, CitySearchService>();
        }
    }
}