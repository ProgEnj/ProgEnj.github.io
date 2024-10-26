const d = document.getElementById("display");
const text = document.getElementById("display-text");
const goto = document.getElementById("goto");
const nowdoc = document.getElementById("nowdoc");
const nowopt = document.getElementById("nowopt");
var doc = "";

function loadDoc(selectedDoc) {
    doc = selectedDoc;
    goto.href = `docs/${doc}/${doc}.html`;
    nowdoc.innerText = doc;
}

function loadContent(type, option) {
    let path = `docs/${doc}/${doc}.${type}`;
    nowopt.innerText = type;
    fetch(path).then(response => {
        if(!response.ok) {
            d.src = "docs/404.html";
        }
        else {
            if (option == "result"){
                console.log("d")
                text.style.display = "none";
                d.style.display = "block";
                d.src = path;
            }
            else {
                console.log("text");
                d.style.display = "none";
                text.style.display = "block";
                response.text().then(html => text.textContent = html);
            }
        }
    });
}