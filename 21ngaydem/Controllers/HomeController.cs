using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using _21ngaydem.Models;
using HttpRequests.HttpRequest;
using HttpRequests.Model;

namespace _21ngaydem.Controllers
{
    public class HomeController : Controller
    {
        public ICategoryRequest _categoryRequest;

        public HomeController(ICategoryRequest categoryRequest)
        {
            _categoryRequest = categoryRequest;
        }

        [HttpGet]
        public IActionResult Index()
        {

            var list = _categoryRequest.GetAll().Result.ToList();

            var result = list.Take(8);

            return View(result);
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
