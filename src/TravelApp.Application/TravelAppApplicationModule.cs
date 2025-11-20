using Microsoft.Extensions.DependencyInjection;
using System;
using TravelApp.Destinations;
using Volo.Abp.Account;
using Volo.Abp.AutoMapper;
using Volo.Abp.FeatureManagement;
using Volo.Abp.Identity;
using Volo.Abp.Modularity;
using Volo.Abp.PermissionManagement;
using Volo.Abp.SettingManagement;
using Volo.Abp.TenantManagement;

namespace TravelApp;

[DependsOn(
    typeof(TravelAppDomainModule),
    typeof(TravelAppApplicationContractsModule),
    typeof(AbpPermissionManagementApplicationModule),
    typeof(AbpFeatureManagementApplicationModule),
    typeof(AbpIdentityApplicationModule),
    typeof(AbpAccountApplicationModule),
    typeof(AbpTenantManagementApplicationModule),
    typeof(AbpSettingManagementApplicationModule)
)]
public class TravelAppApplicationModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        Configure<AbpAutoMapperOptions>(options =>
        {
            options.AddMaps<TravelAppApplicationModule>();
        });
        context.Services.AddHttpClient("GeoDB", client =>
        {
            client.BaseAddress = new Uri("https://wft-geo-db.p.rapidapi.com/v1/geo/cities ");
            client.DefaultRequestHeaders.Add("X-RapidAPI-Host", "geodb-cities.p.rapidapi.com");
            client.DefaultRequestHeaders.Add("X-RapidAPI-Key", "8777bcbfe5mshfe6bb145b724f38p1d2bc9jsn7c0a4051406a");
        });
        context.Services.AddTransient<ICitySearchService, CitySearchService>();
    }
}
