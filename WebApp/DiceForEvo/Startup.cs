using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(DiceForEvo.Startup))]
namespace DiceForEvo
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
