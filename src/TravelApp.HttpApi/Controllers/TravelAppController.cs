using TravelApp.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace TravelApp.Controllers;

/* Inherit your controllers from this class.
 */
public abstract class TravelAppController : AbpControllerBase
{
    protected TravelAppController()
    {
        LocalizationResource = typeof(TravelAppResource);
    }
}
