using TravelApp.Localization;
using Volo.Abp.Application.Services;

namespace TravelApp;

/* Inherit your application services from this class.
 */
public abstract class TravelAppAppService : ApplicationService
{
    protected TravelAppAppService()
    {
        LocalizationResource = typeof(TravelAppResource);
    }
}
