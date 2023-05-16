var bold = false; 
var italic = false; 
var underlined = false; 
var orderedList = false;
var unorderedList = false;
var selectedColor = 'black';
var selectedFont = 'Time New Roman';
var selectedSize = '16';


function update() {
    // call function every 0.5 seconds
    setInterval(convertToHTML, 1);

    // apply changes to text
    setInterval(applyFormatting, 1);
}

function convertToHTML() {
    // get text
    const textContainer = document.getElementById("text-container");
    var html = textContainer.outerHTML;

    // remove contenteditable attribute
    html = html.replace(/ contenteditable="true"/g, "");

    // remove id attribute
    html = html.replace(/ id="[^"]*"/g, "");

    // update HTML container
    const htmlContainer = document.getElementById("html-container");
    htmlContainer.textContent = html;
}


function applyFormatting() {    
    // apply color formatting
    document.execCommand("foreColor", false, selectedColor);
    
    // apply font family formatting
    document.execCommand("fontName", false, selectedFont);
}

function deleteContent() {
    const textContainer = document.getElementById("text-container");
    textContainer.innerText = "";
}

function select(element){   
    if (element.style.filter === "brightness(0.8)"){
        element.style.filter = "none";
    } else {
        element.style.filter = "brightness(0.8)";
    }
    if (element.id === "bold"){
        document.execCommand("bold", false, null);
    } else if (element.id === "italic"){
        document.execCommand("italic", false, null);
    } else if (element.id === "underlined"){
        document.execCommand("underline", false, null);
    }
}

function showDropdown(id) {
    const dropdown = document.getElementById(id);
    if (dropdown.style.display !== "block") {
        dropdown.style.display = "block";
    } else {
        dropdown.style.display = "none";
    }
  }
  
function setColor(color) {
    const image = document.querySelector("#color-container img");
    image.style.borderColor = color;
    selectedColor = color; 
    const dropdown = document.getElementById("color-dropdown");
    dropdown.style.display = "none";
}

function setFont(font) {
    selectedFont = font; 
    const dropdown = document.getElementById("font-dropdown");
    dropdown.style.display = "none";
}

function tab() {
    document.execCommand("insertHTML", false, " &nbsp; &nbsp; &nbsp; &nbsp;");
}

function formatText(text) {
    text = text.replaceAll("<div>", "<p>");
    text = text.replaceAll("</div>", "</p>");
    text = text.replaceAll("</p>", "</p>\n");
    text = text.replace("</font>", "</font></p>\n");
    text = text.replaceAll("style=\"\"", "");
    text = text.slice(0, -5);

    lines = text.split("\n");
    lines.forEach((line, index) => {
        if (/<p>.*<br>.*<\/p>/.test(line)){
            lines[index] = "<p><br></p>"
        }
    });
    text = lines.join("\n");

    return text;
}

function copyToClipboard(id) {
    var copyText = document.getElementById(id);
    var text = copyText.innerText;

    text = formatText(text);

    navigator.clipboard.writeText(text);
}
