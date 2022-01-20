

var name ="Vinit Suryarao";
var marks=85;

// Old Function Style
var getData1 = function( name, marks)
{
    return `Old Func Hello ${name} ${marks}`;
}

console.log(getData1( name, marks));

//Arrow Function
var getData2 = (name, marks) =>
{
    return `Arrow Func Hello ${name} ${marks}`;
}

console.log(getData2( name, marks));
