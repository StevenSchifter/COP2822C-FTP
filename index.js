var inDarkMode = 0;

function toggleMode()
{
    inDarkMode = 1 - inDarkMode;
    setMode(inDarkMode);
}

function setMode(myDarkMode)
{
    if(myDarkMode == 1)
    {
        document.querySelector("body").classList.add("darkmode");
        // Multi-element style setting code borrowed from https://stackoverflow.com/a/21319538
        links = document.querySelectorAll("a");
        for (var i = 0; i < links.length; ++i)
        {
            links[i].classList.add("darklink");
        }
        document.querySelector("#modeSwitch").innerText = "🌙 Dark Mode";
    }
    else if(myDarkMode == 0)
    {
        document.querySelector("body").classList.remove("darkmode");
        links = document.querySelectorAll("a");
        for (var i = 0; i < links.length; ++i)
        {
            links[i].classList.remove("darklink");
        }
        document.querySelector("#modeSwitch").innerText = "☀ Light Mode";
    }
}

// Dark mode detection code borrowed from https://flaviocopes.com/javascript-detect-dark-mode/

function detectDarkMode()
{
    if(window.matchMedia)
    {
        if(window.matchMedia('(prefers-color-scheme: dark)').matches)
        {
            toggleMode();
        }
    }
}