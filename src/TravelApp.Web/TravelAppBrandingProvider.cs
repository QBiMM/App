using Volo.Abp.Ui.Branding;
using Volo.Abp.DependencyInjection;
using Microsoft.Extensions.Localization;
using TravelApp.Localization;

namespace TravelApp.Web;

[Dependency(ReplaceServices = true)]
public class TravelAppBrandingProvider : DefaultBrandingProvider
{
    private IStringLocalizer<TravelAppResource> _localizer;

    public TravelAppBrandingProvider(IStringLocalizer<TravelAppResource> localizer)
    {
        _localizer = localizer;
    }

    public override string AppName => _localizer["AppName"];
}
