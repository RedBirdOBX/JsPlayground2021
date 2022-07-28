using JsPlayground2021.Web.Data.ViewModels;
using System.Collections.Generic;

namespace JsPlayground2021.Web.Data
{
    public class QuoteData
    {
        public List<QuoteModel> Quotes { get; set; }

        public QuoteData()
        {
            Quotes = new List<QuoteModel>()
            {
                new QuoteModel
                {
                    Author = "Ernest Hemingway",
                    Quote = "I drink to make other people more interesting."
                },
                new QuoteModel
                {
                    Author = "Anonymous",
                    Quote = "Roses are red. Violets are blue. Vodka is cheaper than dinner for two."
                },
                new QuoteModel
                {
                    Author = "Albert Einstein",
                    Quote = "A bartender is just a pharmacist with limited inventory."
                },
                new QuoteModel
                {
                    Author = "Dean Martin",
                    Quote = "You know you're not really drunk if you can lie on the floor without holding on."
                },
                new QuoteModel
                {
                    Author = "W.C. Fields",
                    Quote = "Everybody's got to believe in something. I believe I'll have another drink."
                },
                new QuoteModel
                {
                    Author = "Viktor Frankl",
                    Quote = "When we are no longer able to change a situation, we are challenged to change ourselves."
                },
                new QuoteModel
                {
                    Author = "Anonymous",
                    Quote = "There is no free time, spare time, or down time.  Only life time.  Do it."
                },
                new QuoteModel
                {
                    Author = "Anonymous",
                    Quote = "Hope is not an effective strategy."
                },
                new QuoteModel
                {
                    Author = "Anonymous",
                    Quote = "There are two types of people in this world: the hammers and the nails."
                },
                new QuoteModel
                {
                    Author = "Henry Ford",
                    Quote = "Failure is the opportunity to begin again more intelligently."
                },
                new QuoteModel
                {
                    Author = "Henry Ford",
                    Quote = "Whether you think you can, or you think you can’t–you’re right."
                },
                new QuoteModel
                {
                    Author = "Henry Ford",
                    Quote = "Anyone who stops learning is old, whether at twenty or eighty. Anyone who keeps learning stays young."
                },
                new QuoteModel
                {
                    Author = "Henry Ford",
                    Quote = "Quality means doing it right when no one is looking."
                },
                new QuoteModel
                {
                    Author = "Bill Nye",
                    Quote = "Everyone you meet in life knows something you don't."
                },
                new QuoteModel
                {
                    Author = "Kevin Dockx",
                    Quote = "It is often less important what the standard IS than that there IS a standard."
                },
                new QuoteModel
                {
                    Author = "Mark Twain",
                    Quote = "Continuous improvement is better than delayed perfection."
                }
            };
        }
    }
}
