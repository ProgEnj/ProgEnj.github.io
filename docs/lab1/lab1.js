const d = document.getElementById("display");
var doc = "";

function loadDoc(selectedDoc){
    doc = selectedDoc;
}

function loadContent(option){
    if (option == "result"){
        d.innerHTML = `<object type="text/html" data="docs/${doc}/${doc}.html"></object>`;
    }
    else{
        fetch(`docs/${doc}/${doc}.${option}`).then(response => response.text()).then(html => d.innerHTML = html);
    }
}