using TravelApp.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace TravelApp.Web.Pages;

public abstract class TravelAppPageModel : AbpPageModel
{
    protected TravelAppPageModel()
    {
        LocalizationResourceType = typeof(TravelAppResource);
    }
}
