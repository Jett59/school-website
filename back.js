let navigationStack = [];

function pushPage(html) {
    navigationStack.push(html);
}
function popPage() {
    // Pop the current page and return the new top
    navigationStack.pop();
    return navigationStack[navigationStack.length - 1];
}
function goBack(outputBoxId) {
    let outputBox = document.getElementById(outputBoxId);
    let newPageHtml = popPage();
    if (newPageHtml !== undefined) {
        outputBox.innerHTML = newPageHtml;
    }
}

function resetBackButton() {
    navigationStack = [];
}

function backButtonCode(outputBoxId) {
    return `<button onclick="goBack('${outputBoxId}')">&larr; Back</button>`
}
