function exclusiveContentCreate(contentBox) {
    fetch('code/pages.json').then(msg => msg.text()).then(txt => JSON.parse(txt)).then(pages => {
        let exclusiveHTML = `<ul class="unstyled-list">`;
        for (var page of pages) {
            exclusiveHTML += `<li><button onclick="exclusiveContentPageSelect('${page}')">${page}</button></li>`;
        }
        exclusiveHTML += `</ul>`;
        contentBox.innerHTML = exclusiveHTML;
    });
}

function exclusiveContentPageSelect(page) {
    let contentBox = document.getElementById('exclusivecontent');
    fetch('code/' + page + '/files.json').then(msg => msg.text()).then(txt => JSON.parse(txt)).then(files => {
        let exclusiveHTML = `<ul class="unstyled-list">`;
        for (var file of files) {
            exclusiveHTML += `<li><button onclick="exclusiveContentFileSelect('${page}', '${file}')">${file}</button></li>`;
        }
        exclusiveHTML += `</ul>`;
        contentBox.innerHTML = exclusiveHTML;
    });
}

function exclusiveContentFileSelect(page, file) {
    let contentBox = document.getElementById('exclusivecontent');
    fetch('code/' + page + '/' + file).then(msg => msg.text()).then(txt => {
        contentBox.innerText = txt;
    });
}
