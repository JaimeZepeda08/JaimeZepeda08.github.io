function copyToClipboard(id) {
    var copyText = document.getElementById(id);
    var text = copyText.innerText;
    navigator.clipboard.writeText(text);
}

const librariesContiainer = document.querySelector(".libraries-container");
const librarycount = librariesContiainer.querySelectorAll(".library").length;
librariesContiainer.style.columnCount = librarycount;
librariesContiainer.style.columnGap = '50px';