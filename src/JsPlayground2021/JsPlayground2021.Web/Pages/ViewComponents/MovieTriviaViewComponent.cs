using JsPlayground2021.Web.Data.ViewModels;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace JsPlayground2021.Web.Pages.ViewComponents
{
    public class MovieTriviaViewComponent : ViewComponent
    {
        public async Task<IViewComponentResult> InvokeAsync()
        {
            // https://www.learnrazorpages.com/razor-pages/view-components

            var quote = new QuoteModel() 
            { 
                 Author = "foo", Quote = "bar", Source = "Source"
            };

            // can be simple or complex model here.  Cannot be a string b/c it will be mistaken for a view name.  
            // if string, wrap it with an object.
            return View(quote);
        }
    }
}
