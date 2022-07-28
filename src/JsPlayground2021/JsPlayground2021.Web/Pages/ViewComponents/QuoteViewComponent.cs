using JsPlayground2021.Web.Data;
using JsPlayground2021.Web.Data.ViewModels;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace JsPlayground2021.Web.Pages.ViewComponents
{
    public class QuoteViewComponent : ViewComponent
    {
        public async Task<IViewComponentResult> InvokeAsync()
        {
            var quoteData = new QuoteData();
            var quotes = quoteData.Quotes;

            Random random = new Random();
            int randomIndex = random.Next(0, quotes.Count);
            QuoteModel quote = quotes[randomIndex];

            // can be simple or complex model here.
            // Cannot be a string b/c it will be mistaken for a view name. if string, wrap it with an object.
            return View(quote);
        }
    }
}
