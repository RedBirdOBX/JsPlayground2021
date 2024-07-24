const url = 'https://api.github.com';

// fetch is async
const FetchData = () =>
{
    // fetch is async and returns a promise obj
    // we use the then() method to consume the promise object
    fetch(url).then((promise) =>
    {
        // provide the callback function to the then() method
        // this callback function receives the 'promise'... the data back from the api
        // we need to parse the raw data as json
        // the json method is also async so we need to use a then() as well.
        promise.json().then((promiseJson) =>
        {
            console.log(promiseJson);
            document.getElementById("demo").innerHTML =
            `
                ${promiseJson.authorizations_url}<br />
                ${promiseJson.code_search_url}<br />
                ${promiseJson.emails_url}
            `;
        });
    });


};


window.onload = function ()
{
    FetchData();
}
