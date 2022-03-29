function exclusiveContentCreate(contentBox) {
    if (location.protocol.startsWith('file')) {
        contentBox.innerHTML = `<strong>Use live-server for exclusive content!</strong>`
    } else {
        fetch('code/pages.json').then(msg => msg.text()).then(txt => JSON.parse(txt)).then(pages => {
            let exclusiveHTML = backButtonCode(contentBox.id);
            exclusiveHTML += `<ul class="unstyled-list">`;
            for (var page of pages) {
                exclusiveHTML += `<li><button onclick="exclusiveContentPageSelect('${page}')">${page}</button></li>`;
            }
            exclusiveHTML += `</ul>`;
            contentBox.innerHTML = exclusiveHTML;
            pushPage(exclusiveHTML);
        });
    }
}

function exclusiveContentPageSelect(page) {
    let contentBox = document.getElementById('exclusivecontent');
    fetch('code/' + page + '/files.json').then(msg => msg.text()).then(txt => JSON.parse(txt)).then(files => {
        let exclusiveHTML = backButtonCode(contentBox.id);
        exclusiveHTML += `<ul class="unstyled-list">`;
        for (var file of files) {
            exclusiveHTML += `<li><button onclick="exclusiveContentFileSelect('${page}', '${file}')">${file}</button></li>`;
        }
        exclusiveHTML += `</ul>`;
        contentBox.innerHTML = exclusiveHTML;
        pushPage(exclusiveHTML);
    });
}

function exclusiveContentFileSelect(page, file) {
    let contentBox = document.getElementById('exclusivecontent');
    fetch('code/' + page + '/' + file).then(msg => msg.text()).then(txt => {
        let codeBox = document.createElement('code');
        codeBox.innerText = txt;
        let preBox = document.createElement('pre');
        preBox.appendChild(codeBox);
        contentBox.innerHTML = backButtonCode(contentBox.id);
        contentBox.appendChild(preBox);
        highlightCode(preBox);
        pushPage(contentBox.innerHTML);
    });
}
