var elementArray = [];


function printActiveElement() {
    const activeTextarea = document.activeElement.id;
    elementArray.push(activeTextarea);
    console.log(activeTextarea);
    console.log(elementArray);
    if (elementArray.length > 1 ) {
        var previousElementPosition = elementArray.length - 2;
        return elementArray[previousElementPosition];
    }
}

function insertDegree() {
    try {
        document.getElementById(printActiveElement()).value += "&deg;";
    }
    catch (error){
        console.log(error);
    }
    elementArray = [];
}
 
function insertAnd() {
    try {
        document.getElementById(printActiveElement()).value += "&amp;";
    }
    catch (error){
        console.log(error);
    }
    elementArray = [];
}

function insertCopyright() {
    try {
        document.getElementById(printActiveElement()).value += "&copy;";
    }
    catch (error){
        console.log(error);
    }
    elementArray = [];
}

function insertRegistered() {
    try {
        document.getElementById(printActiveElement()).value += "&reg;";
    }
    catch (error){
        console.log(error);
    }
    elementArray = [];
}

function insertEnDash() {
    try {
        document.getElementById(printActiveElement()).value += "&ndash;";
    }
    catch (error){
        console.log(error);
    }
    elementArray = [];
}

function insertTrademark() {
    try {
        document.getElementById(printActiveElement()).value += "&trade;";
    }
    catch (error){
        console.log(error);
    }
    elementArray = [];
}

// To download html file
function downloadHTML(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
  }