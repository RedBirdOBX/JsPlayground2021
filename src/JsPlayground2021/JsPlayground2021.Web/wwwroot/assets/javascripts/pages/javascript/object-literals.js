let mystery = "SecretToLife";

let Spaceship =
{
    Designation: "NCC-1701",
    Name: "Enterprise",
    CalculateSpeed() { return 100; },
    CalculateCrew: (crew) => { return crew * 1; },

    // note the name of this property is set elsewhere!
    [mystery]: 42
};

window.onload = function ()
{
    // example 1
    document.getElementById("demo1").innerHTML = `Spaceship: ${Spaceship.Name}<br />Speed: ${Spaceship.CalculateSpeed()}`;

    // example 2
    document.getElementById("demo2").innerHTML = `SecretToLife: ${Spaceship.SecretToLife}`;
}

