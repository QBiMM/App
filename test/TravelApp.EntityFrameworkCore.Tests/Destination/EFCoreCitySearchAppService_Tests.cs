using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TravelApp.EntityFrameworkCore;
using Xunit;
using TravelApp.Destination;

namespace TravelApp.Destination
{
    [Collection(TravelAppTestConsts.CollectionDefinitionName)]
    public class EFCoreCitySearchAppService_IntegrationTests : ICitySearchAppService_IntegrationTest<TravelAppEntityFrameworkCoreTestModule>
    {


    }
    public class EFCoreCitySearchAppService_MockTests : CitySearchAppService_MockTests<TravelAppEntityFrameworkCoreTestModule>
    {
    }

    public class EFCoreCitySearchAppService_ErrorHandlingTest : CitySearchAppService_ErrorHandlingTest<TravelAppEntityFrameworkCoreTestModule>
    {
    }
}
