const lab6 = document.getElementById("lab6");

function loadContent(where, what) {
    fetch(what).then(response => {
        response.text().then(html => where.innerHTML = html);
    });
}

loadContent(lab6, "Lab6.xsl");

function loadXMLDoc(filename) {
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", filename, false);
    xhttp.send();
    return xhttp.responseXML;
}

function displayXMLWithXSL(xmlpath, xslpath, where) {
    let xml = loadXMLDoc(xmlpath);
    let xsl = loadXMLDoc(xslpath);

    let xsltProcessor = new XSLTProcessor();
    xsltProcessor.importStylesheet(xsl);
    let resultDocument = xsltProcessor.transformToFragment(xml, document);
    document.getElementById(where).appendChild(resultDocument);
}

displayXMLWithXSL("Doctors.xml", "DoctorsSorted.xsl", "sorted");
displayXMLWithXSL("Doctors.xml", "DoctorsSortedOnly.xsl", "sortedOnly");
