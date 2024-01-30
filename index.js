// Detect dark scheme preference or OS dark mode setting
function detectDarkMode()
{
    // First check local storage for dark scheme preference
    if (localStorage.getItem("usingDarkScheme") === "true")
    {
        toggleScheme();
    }
    
    // If no preference was found, check OS dark mode setting and use that to set scheme and preference
    // Media-matching code borrowed from https://flaviocopes.com/javascript-detect-dark-mode/
    else if (localStorage.getItem("usingDarkScheme") === null && window.matchMedia('(prefers-color-scheme: dark)').matches)
    {
        toggleScheme();
    }
}

// Switch between light and dark schemes 
function toggleScheme()
{
    // Add or remove the dark scheme CSS class
    document.body.classList.toggle("dark-scheme");
    document.querySelector("#index-table").classList.toggle("dark-scheme");
    document.querySelector("#scheme-toggle-button").classList.toggle("dark-scheme");
    // Multi-element style setting code borrowed from https://stackoverflow.com/a/21319538
    links = document.querySelectorAll("a");
    for(var a = 0; a < links.length; ++a)
    {
        links[a].classList.toggle("dark-scheme");
    }
    tableHeaderCells = document.querySelectorAll("th")
    for(var h = 0; h < tableHeaderCells.length; ++h)
    {
        tableHeaderCells[h].classList.toggle("dark-scheme");
    }
    tableDataCells = document.querySelectorAll("td")
    for(var d = 0; d < tableDataCells.length; ++d)
    {
        tableDataCells[d].classList.toggle("dark-scheme");
    }
    
    // Set dark scheme preference in local storage
    if (document.body.classList.contains("dark-scheme"))
    {
        localStorage.setItem("usingDarkScheme", "true");
    }
    else
    {
        localStorage.setItem("usingDarkScheme", "false");
    }
}