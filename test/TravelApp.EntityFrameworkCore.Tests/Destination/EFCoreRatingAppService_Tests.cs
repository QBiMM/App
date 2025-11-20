using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TravelApp.EntityFrameworkCore;
using Xunit;

namespace TravelApp.Destination
{
    [Collection(TravelAppTestConsts.CollectionDefinitionName)]
    public class EFCoreRatingAppService_UnitTests : RatingAppService_UnitTests<TravelAppEntityFrameworkCoreTestModule>
    {


    }
    public class EFCoreRatingAppService_IntegrationsTests : RatingAppService_IntegrationTests<TravelAppEntityFrameworkCoreTestModule>
    {
    }

}
