(function ()
{
    "use strict";

    let _msg = null;
    let _defaultMsg = "Hello World";

    console.log("SelfInvokingExample invoked");

    const Initialize = (msg) =>
    {
        _msg = msg;
    };

    const GreetingAlert = () =>
    {
        alert(_msg);
    };

    const GreetingConsole = () =>
    {
        console.log(`Greeting Msg: ${_msg}.`);
    };

    return {
        Initialize: Initialize,
        GreetingAlert: GreetingAlert,
        GreetingConsole: GreetingConsole
    }
})();


// You can also give the function a NAME like this....
//let SelfInvokingExample = function () {
//    "use strict";

//    let _msg = null;
//    console.log("SelfInvokingExample invoked");

//    const Initialize = (msg) => {
//        _msg = msg;
//    };

//    const GreetingAlert = () => {
//        alert(_msg);
//    };

//    const GreetingConsole = () => {
//        console.log(`Greeting Msg: ${_msg}.`);
//    };

//    return {
//        Initialize: Initialize,
//        GreetingAlert: GreetingAlert,
//        GreetingConsole: GreetingConsole
//    }
//}();
