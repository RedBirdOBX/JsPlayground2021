const url = 'https://api.github.com';

const FetchData = async () =>
{
    // just await on the promise
    const resp = await fetch(url);

    const jsonData = await resp.json();
    console.log(jsonData);
    document.getElementById("demo").innerHTML =
    `
        ${jsonData.authorizations_url}<br />
        ${jsonData.code_search_url}<br />
        ${jsonData.emails_url}
    `;
};


window.onload = function ()
{
    FetchData();
}
