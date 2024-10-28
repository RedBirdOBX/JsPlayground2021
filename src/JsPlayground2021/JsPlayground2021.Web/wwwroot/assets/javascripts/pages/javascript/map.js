const Capitalize = (fruit) =>
{
    return fruit.toUpperCase();
};

window.onload = function ()
{
    let fruits = ["Banana", "Orange", "Apple", "Mango"];

    let capFruitsArray = fruits.map(Capitalize);
    document.getElementById("demo").innerHTML = capFruitsArray.join(" - ");

    let lcFruits = fruits.map(f => f.toLowerCase());
    document.getElementById("demo2").innerHTML = lcFruits.join(" - ");
}
