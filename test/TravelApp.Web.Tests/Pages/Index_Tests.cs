using System.Threading.Tasks;
using Shouldly;
using Xunit;

namespace TravelApp.Pages;

[Collection(TravelAppTestConsts.CollectionDefinitionName)]
public class Index_Tests : TravelAppWebTestBase
{
    [Fact]
    public async Task Welcome_Page()
    {
        var response = await GetResponseAsStringAsync("/");
        response.ShouldNotBeNull();
    }
}
