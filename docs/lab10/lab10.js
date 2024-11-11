async function loadXML(file){
    const parser = new DOMParser();
    const response = await fetch(file);
    const text = await response.text();
    const xmlDoc = parser.parseFromString(text, 'application/xml');
    return xmlDoc;
}

function displayXML(){
    const div = document.getElementById("xml-insert");
    loadXML("lab10.xml").then(xmlDoc => {
        var x = xmlDoc.getElementsByTagName("msg")[0];
        div.innerHTML = x.textContent;
    });
}

function loadTable(digitsToWords){
    loadXML("doctors.xml").then(xmlDoc => { 
        const tableContainer = document.getElementById('table-insert');
        // Створення таблиці
        const table = document.createElement('table');
        table.className = "table";
        const headerRow = document.createElement('tr');
        headerRow.style = "t-th-td"

        // Створення заголовків таблиці
        const headers = ['Спеціалізація', 'Прізвище', 'Ім’я', 'По батькові', 'Дні', 'Час', 'Кабінет'];
        headers.forEach(headerText => {
            const th = document.createElement('th');
            th.className = "t-th-td t-data table";
            th.textContent = headerText;
            headerRow.appendChild(th);
        });
        table.appendChild(headerRow);

        // Заповнення рядків таблиці даними з XML
        const doctors = xmlDoc.getElementsByTagName('doctor');
        for (let i = 0; i < doctors.length; i++) {
            const doctor = doctors[i];
            const specialization = doctor.getElementsByTagName('specialization')[0].textContent;
            const lastName = doctor.getElementsByTagName('last_name')[0].textContent;
            const firstName = doctor.getElementsByTagName('first_name')[0].textContent;
            const middleName = doctor.getElementsByTagName('middle_name')[0].textContent;
                 days = doctor.getElementsByTagName('days')[0].textContent;
            if(digitsToWords){
                 var time = numberToWords(doctor.getElementsByTagName('time')[0].textContent);
                 var office = numberToWords(doctor.getElementsByTagName('office')[0].textContent);
            }
            else{
                 var time = doctor.getElementsByTagName('time')[0].textContent;
                 var office = doctor.getElementsByTagName('office')[0].textContent;
            }

            const row = document.createElement('tr');
            row.className = "t-tb-tr table";
            row.innerHTML = `
                <td class="t-data t-tb-td">${specialization}</td>
                <td class="t-data t-tb-td">${lastName}</td>
                <td class="t-data t-tb-td">${firstName}</td>
                <td class="t-data t-tb-td">${middleName}</td>
                <td class="t-data t-tb-td">${days}</td>
                <td class="t-data t-tb-td">${time}</td>
                <td class="t-data t-tb-td">${office}</td>
            `;
            table.appendChild(row);
        }

        tableContainer.appendChild(table); 
    });
}

function ReplaceNum(num){
    const ones = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    if(num == "00") return "zero zero";
    if(num[0] == "0" && num.length > 1){
        var digits = num.split('');
        digits.shift();
        num = Number(digits.join(""));
    }

    if (num < 10) return ones[num];
    if (num < 20) return teens[num - 10];
    if (num < 100) return tens[Math.floor(num / 10)] + (num % 10 !== 0 ? " " + ones[num % 10] : "");
    if (num < 1000) return `${ones[num[0]]} hundred and ${ReplaceNum(num.slice(1))}`
}

function numberToWords(line) {
    var str = line;
    var digits = line.split('');
    var foundDigit = "";
    //debugger;
    for(i = 0; i <= digits.length; i++){
        if(!isNaN(digits[i]) && !(digits[i] == " ")){
            foundDigit += digits[i];
        }
        else if(foundDigit.length > 0){
            str = str.replace(foundDigit, ReplaceNum(foundDigit));
            console.log(str)
            foundDigit = "";
        }
    }
    return str;
}
