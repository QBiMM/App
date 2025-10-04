using Microsoft.Extensions.Localization;
using TravelApp.Localization;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace TravelApp;

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
