using Volo.Abp.Settings;

namespace TravelApp.Settings;

public class TravelAppSettingDefinitionProvider : SettingDefinitionProvider
{
    public override void Define(ISettingDefinitionContext context)
    {
        //Define your own settings here. Example:
        //context.Add(new SettingDefinition(TravelAppSettings.MySetting1));
    }
}
