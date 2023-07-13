function CheckInput()
{
    var x = document.forms["NumberForm"]["NumberX"].value;
    if(x == null || x == '')
    {
        alert('Please enter a value for Number X.');
        return;
    }
}

function getSum(x, y)
{
    return x + y;
}

function getProduct(x, y)
{
    return x * y;
}

function getBigger(x, y)
{
    if (x > y)
    {
        return x + ' is bigger than ' + y;
    }
    else if (x < y)
    {
        return y + ' is bigger than ' + x;
    }
    else
    {
        return x + ' is equal to ' + y;
    }
}

function presentResults()
{
    
}