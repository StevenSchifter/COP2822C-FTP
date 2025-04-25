"use strict";
// Global constants
const colorScheme = document.querySelector('meta[name="color-scheme"]');

// Detect color scheme preference or OS light/dark mode setting
function detectColorSchemePref()
{
    let schemeSelector = document.querySelector('#scheme-selector');
    let usingDarkScheme = localStorage.getItem('usingDarkScheme');
    
    // First check local storage for dark scheme preference,
    // and then make the selector value match that preference
    if (usingDarkScheme === 'true')
    {
        toggleScheme('dark');
        schemeSelector.value = 'dark';
    }
    else if (usingDarkScheme === 'false')
    {
        toggleScheme('light');
        schemeSelector.value = 'light';
    }
    else // Default to automatic color scheme
    {
        toggleScheme('auto');
        schemeSelector.value = 'auto';
    }
}

// Switch between automatic, light, and dark schemes 
function toggleScheme(schemePref)
{
    // Change the content of the meta tag named "color-scheme",
    // and then set the color scheme preference in local storage
    if (schemePref === 'light')
    {
        colorScheme.setAttribute('content', 'light');
        localStorage.setItem('usingDarkScheme', 'false');
    }
    else if (schemePref === 'dark')
    {
        colorScheme.setAttribute('content', 'dark');
        localStorage.setItem('usingDarkScheme', 'true');
    }
    else if (schemePref === 'auto')
    {
        colorScheme.setAttribute('content', 'light dark');
        localStorage.setItem('usingDarkScheme', 'auto');
    }
}