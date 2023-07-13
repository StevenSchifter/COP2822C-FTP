function ProcessInput()
{
    // Get the value of Number X
    var X = document.forms["NumberForm"]["NumberX"].value;
      
    // Check if Number X has a numeric value
    // if(!isNaN(parseInt(X)))
    // {
        // alert("Please enter a numeric value for Number X.");
        // return;
    // }
    
    // Get the value of Number Y
    var Y = document.forms["NumberForm"]["NumberY"].value;

    // Check if Number Y has a numeric value
    // if(!isNaN(parseFloat(Y)))
    // {
        // alert("Please enter a numeric value for Number Y.");
        // return;
    // }

    // At this point, both numbers should have valid values, so they can be processed
    PresentResults(X, Y);
}

function GetSum(X, Y)
{
    return X + Y;
}

function GetProduct(X, Y)
{
    return X * Y;
}

function GetBigger(X, Y)
{
    if (X > Y)
    {
        return X + " is bigger than " + Y;
    }
    else if (X < Y)
    {
        return Y + " is bigger than " + X;
    }
    else
    {
        return X + " is equal to " + Y;
    }
}

function PresentResults(X, Y)
{
    // Declare variables for the <p> elements where results will be presented
    var SumElement     = document.getElementById("sum");
    var ProductElement = document.getElementById("product");
    var BiggerElement  = document.getElementById("bigger");
    
    // Declare variables for the function results
    var SumResult     = GetSum(X, Y);
    var ProductResult = GetProduct(X, Y);
    var BiggerResult  = GetBigger(X, Y);
    
    // Change the values of the text in the <p> elements
    SumElement.innerText = "The sum of " + X + " and " + Y + " is " + SumResult + "."
    ProductElement.innerText = "The sum of " + X + " and " + Y + " is " + ProductResult + "."
    BiggerElement.innerText = BiggerResult + "."
}