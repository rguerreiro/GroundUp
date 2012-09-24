using System.Web.Mvc;
using GroundUp.Infrastructure.Mvc;

namespace GroundUp.Controllers
{
    public class HomeController : GroundUpController
    {
        public ActionResult Index()
        {
            return SinglePageView();
        }
        public ActionResult About()
        {
            return SinglePageView();
        }
        public ActionResult Contact()
        {
            return SinglePageView();
        }
    }
}