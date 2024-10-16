const d = document.getElementById("display");
function loadDoc(doc) {
    d.innerHTML = `<object type="text/html" data="docs/${doc}"></object>`;
}