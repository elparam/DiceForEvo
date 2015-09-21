using DiceForEvo.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;

namespace DiceForEvo.Controllers
{
    public class PersonController : Controller
    {
        public ActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public async Task<bool> Create(PersonViewModel model)
        {
            //var user = new ApplicationUser { UserName = model.Email, Email = model.Email };
            //var result = await UserManager.CreateAsync(user, model.Password);
            //if (!result.Succeeded) return false;
            //await SignInManager.SignInAsync(user, false, false);
            return true;
        }
	}
}