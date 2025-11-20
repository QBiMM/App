using Microsoft.AspNetCore.Builder;
using TravelApp;
using Volo.Abp.AspNetCore.TestBase;

var builder = WebApplication.CreateBuilder();
builder.Environment.ContentRootPath = GetWebProjectContentRootPathHelper.Get("TravelApp.Web.csproj"); 
await builder.RunAbpModuleAsync<TravelAppWebTestModule>(applicationName: "TravelApp.Web");

public partial class Program
{
}
