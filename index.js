"use strict";
exports.__esModule = true;
// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}
// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
for (i = 0; i < close.length; i++) {
    close[i].addEventListener('click', function (e) {
        var div = close[i].parentElement;
        !!div ? div.style.display = "none" : console.log();
    });
}
// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
if (list != null) {
    list.addEventListener('click', function (ev) {
        var t = ev.target;
        if (t) {
            if (t.tagName === 'LI') {
                t.classList.toggle('checked');
            }
        }
    }, false);
}
// Create a new list item when clicking on the "Add" button
function newElement() {
    var li = document.createElement("li");
    var input = document.getElementById("myInput");
    var inputValue = input.value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    }
    else {
        var myUrl = document.getElementById("myUL");
        if (!!myUrl) {
            myUrl.appendChild(li);
        }
    }
    input.value = "";
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    for (i = 0; i < close.length; i++) {
        close[i].addEventListener('click', function (e) {
            var div = close[i].parentElement;
            !!div ? div.style.display = "none" : console.log();
        });
    }
}
