const url = new URL(window.location);
const d = document.getElementById("display");
const text = document.getElementById("display-text");
const goto = document.getElementById("goto");
const nowdoc = document.getElementById("nowdoc");
const nowopt = document.getElementById("nowopt");
var doc = "";

addEventListener("load", onLoad);

function onLoad() {
    doc = url.searchParams.get("doc");
    let type = url.searchParams.get("type");
    if(doc != null){
        loadDoc(doc);
    }

    if(type != null){
        loadContent(type, "result"); // to always go to result
    }
}

function loadDoc(selectedDoc) {
    doc = selectedDoc;
    goto.href = `docs/${doc}/${doc}.html`;
    nowdoc.innerText = doc;
    if ('URLSearchParams' in window) {
        url.searchParams.set("doc", doc);
        history.pushState(null, '', url);
    }
}

function loadContent(type, option) {
    if ('URLSearchParams' in window) {
        url.searchParams.set("type", type);
        history.pushState(null, '', url);
    }
    let path = `docs/${doc}/${doc}.${type}`;
    nowopt.innerText = type;
    fetch(path).then(response => {
        if(!response.ok) {
            d.src = "docs/404.html";
        }
        else {
            if (option == "result"){
                text.style.display = "none";
                d.style.display = "block";
                d.src = path;
            }
            else {
                d.style.display = "none";
                text.style.display = "block";
                response.text().then(html => text.textContent = html);
            }
        }
    });
}