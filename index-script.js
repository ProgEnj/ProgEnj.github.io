const d = document.getElementById("display");
var doc = "";

function loadDoc(selectedDoc){
    doc = selectedDoc;
}

function loadContent(option){
    d.style.whiteSpace = "pre";
    switch (option) {
        case "result":
            d.style.whiteSpace = "initial";
            fetch(`docs/${doc}/${doc}.html`).then(response => response.text()).then(html => d.innerHTML = html);
            break;
        case "html":
            fetch(`docs/${doc}/${doc}.html`).then(response => response.text()).then(html => d.textContent= html);
            break;
        case "css":
            fetch(`docs/${doc}/${doc}.css`).then(response => response.text()).then(html => d.innerHTML = html);
            break;
        case "js":
            fetch(`docs/${doc}/${doc}.js`).then(response => response.text()).then(html => d.innerHTML = html);
            break;
        default:
            break;
    }
}