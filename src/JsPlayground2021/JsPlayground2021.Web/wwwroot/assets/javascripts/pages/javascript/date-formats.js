// fetch is async
const SetDateFormats = () =>
{
    let date1 = new Date();
    document.getElementById("demo1").innerHTML = date1;

    let date2 = new Date();
    document.getElementById("demo2").innerHTML = date2;

    let date3 = new Date("2017-04-30T12:30:00");
    document.getElementById("demo3").innerHTML = date3;

    let date4 = new Date("04/30/2017");
    document.getElementById("demo4").innerHTML = date4;

    let date5 = new Date("Mar 25 2015");
    document.getElementById("demo5").innerHTML = date5;
};


window.onload = function ()
{
    SetDateFormats();
}
