var re = /(?<title>(?:[A-Z][a-z]+\s?)+)\((?<year>(19|20)\d{2})\)/;

let insertFoundElement = function(el, title, year) {
    console.log('title: "' + title + '", year ' + year);
    var a = document.createElement("A");    
    var img = document.createElement("IMG");    
    img.src = chrome.extension.getURL('popcorn.svg');
    a.appendChild(img);
    el.parentNode.insertBefore(a, el);
}

document.addEventListener('readystatechange', function() {
    if (event.target.readyState === "complete") {
        var elements = Array.prototype.slice.call(document.getElementsByTagName('*'));
        for (var i = 0, l = elements.length; i < l; i++) {
            if (elements[i].innerHTML.trimStart().startsWith('<')) continue;
            var result = re.exec(elements[i].innerHTML);
            if (!result) continue;
            insertFoundElement(elements[i], result.groups.title.trim(), result.groups.year)
        }
    }
}, false);