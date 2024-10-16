const d = document.getElementById("display");
var doc = "";

function loadDoc(selectedDoc) {
    doc = selectedDoc;
}

function loadContent(type, option) {
    fetch(`docs/${doc}/${doc}.${type}`).then(response => {
        if(!response.ok) {
            d.textContent = "404, not found";
        }
        else {
            if(option == "result"){
                d.style.whiteSpace = "initial";
                response.text().then(html => d.innerHTML = html)
            }
            else{
                d.style.whiteSpace = "pre";
                response.text().then(html => d.textContent = html);
            }
        }
    });
}