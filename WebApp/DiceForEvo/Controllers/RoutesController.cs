using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace DiceForEvo.Controllers
{
    public class RoutesController : Controller
    {
        public ActionResult PersonInfo(int personId = 1)
        {
            ViewBag.PersonId = personId;
            return View();
        }

        public ActionResult DiceResult()
        {
            return View();
        }
    }
}