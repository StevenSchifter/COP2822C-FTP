// Process the contents of the form fields
function ProcessInput()
{
    // Get the value of Number X and assign it to the global variable X
    var X = document.forms["NumberForm"]["NumberX"].value;
    // Make sure X is a number
    X = parseFloat(X);
      
    // Check if Number X has a numeric value
    if(isNaN(X))
    {
        alert("Please enter a numeric value for Number X.");
        return;
    }
    
    // Get the value of Number Y and assign it to the global variable Y
    var Y = document.forms["NumberForm"]["NumberY"].value;
    // Make sure Y is a number
    Y = parseFloat(Y);

    // Check if Number Y has a numeric value
    if(isNaN(Y))
    {
        alert("Please enter a numeric value for Number Y.");
        return;
    }

    // At this point, both numbers should have valid values, so they can be processed
    PresentResults(X, Y);
}

// Return the sum of X and Y
function GetSum(X, Y)
{
    return X + Y;
}

// Return the product of X and Y
function GetProduct(X, Y)
{
    return X * Y;
}

// Return a phrase indicating which number is bigger or if the numbers are equal
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

// Present the results in <p> elements below the button
function PresentResults(X, Y)
{
    // Declare constants for the <p> elements
    const SumElement     = document.getElementById("Sum");
    const ProductElement = document.getElementById("Product");
    const BiggerElement  = document.getElementById("Bigger");
    
    // Declare local variables for the function results
    let SumResult     = GetSum(X, Y);
    let ProductResult = GetProduct(X, Y);
    let BiggerResult  = GetBigger(X, Y);
    
    // Change the values of the text in the <p> elements
    SumElement.innerText = "The sum of " + X + " and " + Y + " is " + SumResult + ".";
    ProductElement.innerText = "The product of " + X + " and " + Y + " is " + ProductResult + ".";
    BiggerElement.innerText = BiggerResult + ".";
}