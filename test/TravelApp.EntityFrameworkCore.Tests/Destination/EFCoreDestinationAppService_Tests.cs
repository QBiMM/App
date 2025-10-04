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
    public class EFCoreDestinationAppService_Tests : IDestinationAppService<TravelAppEntityFrameworkCoreTestModule>
    {


    }
}
