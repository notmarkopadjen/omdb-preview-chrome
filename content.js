var re = /(?<title>(?:([A-Z][a-z]+|\d*)(\s|\.)?)+)\(?(?<year>(19|20)\d{2})/;

var iconContent = '<svg xmlns="http://www.w3.org/2000/svg" class="popcornIcon" viewBox="0 0 128 128"><defs><style>.cls-1{isolation:isolate;}.cls-2{mix-blend-mode:multiply;}.cls-3,.cls-8{fill:#302a27;}.cls-4{fill:#fccc33;}.cls-5{fill:#fff;}.cls-6{fill:#d94b58;}.cls-7{fill:none;}.cls-7,.cls-8{stroke:#302a27;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}.cls-8{opacity:0.12;}.cls-9{opacity:0.24;}</style></defs><title>popcorn</title><g class="cls-1"><g id="icons" class="cls-2"><path class="cls-3" d="M38,115a2,2,0,0,1-1.984-1.752l-8-64A2,2,0,0,1,28,49a10.059,10.059,0,0,1,5.244-8.8A10.01,10.01,0,0,1,43,28a10.09,10.09,0,0,1,1.044.055A10.014,10.014,0,0,1,54,19q.409,0,.819.034A10.069,10.069,0,0,1,64,13a9.824,9.824,0,0,1,3.713.717,9.947,9.947,0,0,1,5.471,5.317Q73.592,19,74,19a10.015,10.015,0,0,1,9.956,9.055,10.01,10.01,0,0,1,10.8,12.15A10.058,10.058,0,0,1,100,49a1.912,1.912,0,0,1-.016.248l-8,64A2,2,0,0,1,90,115Z"/><path class="cls-3" d="M64,15a7.842,7.842,0,0,1,2.96.57,7.993,7.993,0,0,1,4.86,5.73A8.2,8.2,0,0,1,74,21a8,8,0,0,1,8,8,8.1,8.1,0,0,1-.17,1.65A8.009,8.009,0,0,1,93,38a7.876,7.876,0,0,1-.73,3.33A8,8,0,0,1,98,49l-8,64H38L30,49a8,8,0,0,1,5.73-7.67A7.876,7.876,0,0,1,35,38a8.009,8.009,0,0,1,11.17-7.35A8.1,8.1,0,0,1,46,29a8,8,0,0,1,8-8,8.2,8.2,0,0,1,2.18.3A8,8,0,0,1,64,15m0-4a12.081,12.081,0,0,0-10.391,6.006,12.024,12.024,0,0,0-11.234,9.01A12.016,12.016,0,0,0,31,38q0,.614.06,1.216A12.069,12.069,0,0,0,26,49a4,4,0,0,0,.031.5l8,64A4,4,0,0,0,38,117H90a4,4,0,0,0,3.969-3.5l8-64A4,4,0,0,0,102,49a12.069,12.069,0,0,0-5.06-9.784Q97,38.614,97,38A12.016,12.016,0,0,0,85.625,26.016,12.025,12.025,0,0,0,74.4,17.007a11.956,11.956,0,0,0-5.969-5.156A11.753,11.753,0,0,0,64,11Z"/><g id="_Group_" data-name="&lt;Group&gt;"><path class="cls-4" d="M98,49H30a8,8,0,0,1,5.73-7.67A7.876,7.876,0,0,1,35,38a8.009,8.009,0,0,1,11.17-7.35A8.1,8.1,0,0,1,46,29a8,8,0,0,1,8-8,8.2,8.2,0,0,1,2.18.3A8,8,0,0,1,64,15a7.841,7.841,0,0,1,2.96.57,7.993,7.993,0,0,1,4.86,5.73A8.2,8.2,0,0,1,74,21a8,8,0,0,1,8,8,8.1,8.1,0,0,1-.17,1.65A8.009,8.009,0,0,1,93,38a7.876,7.876,0,0,1-.73,3.33A8,8,0,0,1,98,49Z"/><polygon class="cls-5" points="57 49 58 113 48 113 43 49 57 49"/><polygon class="cls-6" points="98 49 90 113 80 113 85 49 98 49"/><polygon class="cls-5" points="85 49 80 113 70 113 71 49 85 49"/><polygon class="cls-6" points="71 49 70 113 58 113 57 49 71 49"/><polygon class="cls-6" points="43 49 48 113 38 113 37.11 105.92 30 49 43 49"/><path class="cls-7" d="M30,49a8,8,0,0,1,5.73-7.67A7.876,7.876,0,0,1,35,38a8.009,8.009,0,0,1,11.17-7.35A8.1,8.1,0,0,1,46,29a8,8,0,0,1,8-8,8.2,8.2,0,0,1,2.18.3A8,8,0,0,1,64,15a7.841,7.841,0,0,1,2.96.57,7.993,7.993,0,0,1,4.86,5.73A8.2,8.2,0,0,1,74,21a8,8,0,0,1,8,8,8.1,8.1,0,0,1-.17,1.65A8.009,8.009,0,0,1,93,38a7.876,7.876,0,0,1-.73,3.33A8,8,0,0,1,98,49"/><polygon class="cls-7" points="98 49 90 113 80 113 70 113 58 113 48 113 38 113 37.11 105.92 30 49 43 49 57 49 71 49 85 49 98 49"/><line class="cls-7" x1="57" y1="49" x2="58" y2="113"/><line class="cls-7" x1="71" y1="49" x2="70" y2="113"/><line class="cls-7" x1="85" y1="49" x2="80" y2="113"/><line class="cls-7" x1="43" y1="49" x2="48" y2="113"/></g><path class="cls-8" d="M98,49l-8,64H38l-.89-7.08c3.6-1.45,9.68.5,12.6,1.01,8.51,1.51,17.23.49,25.81-.52,2.44-.29,4.97-.61,7.04-1.93,2.99-1.9,4.44-5.54,4.83-9.06s-.09-7.08,0-10.62c.13-5.46,1.58-10.79,3.03-16.05q1.215-4.455,2.44-8.9c.98-3.59,1.89-7.72-.01-10.85-.07-.13-.15-.25-.23-.37-1.99-2.88-6.4-4.8-5.78-8.25.28-1.57,1.67-3.04,1.15-4.55-.45-1.32-2.1-1.76-3.49-1.7s-2.82.43-4.12-.04c-3.66-1.33-3.33-7.87-7.13-8.71-1.38-.31-3.1.24-4.05-.8-1.26-1.39.43-3.84-.57-5.43-.38-.59-1.05-.93-1.46-1.5a2.25,2.25,0,0,1-.21-2.08,7.993,7.993,0,0,1,4.86,5.73A8.2,8.2,0,0,1,74,21a8,8,0,0,1,8,8,8.1,8.1,0,0,1-.17,1.65A8.009,8.009,0,0,1,93,38a7.876,7.876,0,0,1-.73,3.33A8,8,0,0,1,98,49Z"/><g class="cls-9"><path class="cls-7" d="M54.732,38.3A5,5,0,0,1,61.8,31.232"/><path class="cls-7" d="M69,42a4,4,0,0,1,8,0"/></g></g></g></svg>';

let insertFoundElement = function(el, title, year) {
    if (!title) return;
    console.log('title: "' + title + '", year ' + year);
    var a = document.createElement("a");
    a.href = "https://www.google.com/search?q=" + title + " " + year;
    a.target = "_blank";
    a.className = "tooltip";
    a.innerHTML = iconContent;
    var toolTipContent = document.createElement("div");
    toolTipContent.innerHTML = '<a target="_blank" href="http://www.google.com">'+ title + '</a> ' + year;
    toolTipContent.className = "tooltiptext";
    a.appendChild(toolTipContent);
    el.parentNode.insertBefore(a, el);
}

document.addEventListener('readystatechange', function() {
    if (event.target.readyState === "complete") {
        var elements = Array.prototype.slice.call(document.getElementsByTagName('*'));
        for (var i = 0, l = elements.length; i < l; i++) {
            if (elements[i].nodeName == "SCRIPT") continue;
            if (elements[i].innerHTML.trimStart().startsWith('<')) continue;
            var result = re.exec(elements[i].innerHTML);
            if (!result) continue;
            insertFoundElement(elements[i], result.groups.title.trim(), result.groups.year)
        }
    }
}, false);