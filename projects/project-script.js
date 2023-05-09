function redirectToPage(url) {
    indow.location.href = url;
}

function copyToClipboard(id) {
    var copyText = document.getElementById(id);
    var text = copyText.innerText;
    navigator.clipboard.writeText(text);
    showCopyImage()
}

function showCopyImage() {
    var overlay = document.getElementById("copy-overlay");
    overlay.style.display = "block";
    setTimeout(function() {
        overlay.style.display = "none";
    }, 150); 
}

const librariesContiainer = document.querySelector(".libraries-container");
const librarycount = librariesContiainer.querySelectorAll(".library").length;
librariesContiainer.style.columnCount = librarycount;
librariesContiainer.style.columnGap = '50px';