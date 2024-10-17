const d = document.getElementById("display");
const text = document.getElementById("display-text");
var doc = "";

function loadDoc(selectedDoc) {
    doc = selectedDoc;
}

function loadContent(type, option) {
    let path = `docs/${doc}/${doc}.${type}`;
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