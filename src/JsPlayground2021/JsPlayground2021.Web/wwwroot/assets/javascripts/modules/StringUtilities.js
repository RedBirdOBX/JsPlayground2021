const CapitalizeFirstLetter = (string) =>
{
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

const FormatAsUSCurrency = (number) =>
{
    return number.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};

const AddCommas = (nStr) => {
    nStr += '';
    var x = nStr.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1;
};

const ConvertToPercentageString = (input, numberOfDecimals) => {
    // used to a decimal to a percentage string. ex: 0.051% //

    // if not numbers, fix them
    input = (isNaN(input)) ? 0 : input;
    numberOfDecimals = (isNaN(numberOfDecimals)) ? 0 : numberOfDecimals;

    // determine whether this was pos or neg number.
    let sign = (input > 0);

    // if negative, reverse it temporarily.
    if (!sign) {
        input = (input * -1);
    }

    // convert it to have determined num of decimal places
    input = input * 100;
    let results = Number(input.toFixed(numberOfDecimals));

    // build the neg char
    let signLabel = (!sign && input !== 0) ? "-" : "";

    return `${signLabel}${results}%`;
};


// 1) export explicit members
export { CapitalizeFirstLetter, FormatAsUSCurrency, AddCommas, ConvertToPercentageString };

// 2) export explicit members with alias
//export { CapitalizeFirstLetter as CFL, FormatAsUSCurrency as FUSC, AddCommas as AC, ConvertToPercentageString as CTP };

// 3) export each member....
//export const Method1 = () => { console.log('hello'); };

// 4) you can export one member as default.
// in theory, CapitalizeFirstLetter is the one that doesn't have to be explicitly named with the import.
//export { CapitalizeFirstLetter as default, FormatAsUSCurrency, AddCommas, ConvertToPercentageString };

// the import might on MyFile.js look like this:
//import cfl from 'StringUtilities.js';
//import { FormatAsUSCurrency, AddCommas, ConvertToPercentageString } from './StringUtilities.js';

