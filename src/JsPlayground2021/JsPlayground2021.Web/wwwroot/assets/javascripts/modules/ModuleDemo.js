// 1) explicit imports
import { CapitalizeFirstLetter, FormatAsUSCurrency, AddCommas, ConvertToPercentageString } from './StringUtilities.js';

// 2) this is a 'default' import.  the exporter must have been marked as 'export default'. we can name this anything.
// import anything from 'myFile.js';

// 3) import all
// import * as imported from 'myFile.js';

// 4) or mixed. not a fan of this...
//import anythingFromDefaultExport, { someOtherMethodExportedOnmyFile.js } from 'myFile.js';


$(function ()
{
    let msg = "hello";
    $("#demo1").text(CapitalizeFirstLetter(msg));

    let money = 1000000;
    $("#demo2").text(FormatAsUSCurrency(money));

    let longNumber = 100000000;
    $("#demo3").text(AddCommas(longNumber));

    let pct = 0.42;
    $("#demo4").text(ConvertToPercentageString(pct));
});


// IIFE function doesn't work
//let ModuleDemo = function ()
//{
//    "use strict";

//    const Initialize = () =>
//    {
//        let msg = "hello";
//        $("#demo1").text(CapitalizeFirstLetter(msg));

//        let money = 1000000;
//        $("#demo2").text(FormatAsUSCurrency(money));

//        let longNumber = 100000000;
//        $("#demo3").text(AddCommas(longNumber));

//        let pct = 0.42;
//        $("#demo4").text(ConvertToPercentageString(pct));
//    };

//    return {
//        Initialize: Initialize
//    };
//}();