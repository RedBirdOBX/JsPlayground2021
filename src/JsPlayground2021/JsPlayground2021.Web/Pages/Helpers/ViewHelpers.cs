using System;

namespace JsPlayground2021.Web.Pages.ViewHelpers
{
    public static class ViewHelpers
    {
        public static string GenerateFooter() => $"&copy; {DateTime.Today.Year} - JsPlayground";
    }
}
