window.addEventListener('load', attachGithubContentListeners);

let avatarDebouncer = debounce();

function attachGithubContentListeners() {
    let ownerBox = document.getElementById('githubowner');
    let avatarBox = document.getElementById('githubavatar');
    ownerBox.addEventListener('input', event => {
        avatarDebouncer(() => {
            let username = ownerBox.value;
            avatarBox.innerHTML = ``;
            if (username != undefined && username !== '') {
                loadAvatar(username, avatarBox);
            }
        });
    });
}

function apiFetch(url, callback) {
    fetch(url).then(msg => msg.text()).then(txt => JSON.parse(txt)).then(callback);
}

function loadAvatar(username, avatarBox) {
    apiFetch(`https://api.github.com/users/${username}`, msg => {
        if (msg.avatar_url != undefined) {
            avatarBox.innerHTML = `<img id="avatar-image" src="${msg.avatar_url
                } "/>`;
        }
    });
}

function githubContentSelect() {
    let ownerBox = document.getElementById('githubowner');
    let repoBox = document.getElementById('githubrepo');
    apiFetch('https://api.github.com/repos/' + ownerBox.value + '/' + repoBox.value + '/branches', createBranchSelection);
}

function selectBranch(commitUrl) {
    apiFetch(commitUrl, commit => apiFetch(commit.commit.tree.url, loadTree));
}

function selectPath(url, type) {
    apiFetch(url, item => {
        if (type === 'blob') {
            loadBlob(atob(item.content));
        } else if (type === 'tree') {
            loadTree(item);
        }
    });
}

function getOutputBox() {
    return document.getElementById('githuboutputbox');
}

function createBranchSelection(branches) {
    let outputBox = getOutputBox();
    let outputHTML = backButtonCode(outputBox.id);
    outputHTML += `<ul class="unstyled-list">`;
    for (var branch of branches) {
        outputHTML += `<li><button onclick="selectBranch('${branch.commit.url}')">${branch.name}</button></li>`;
    }
    outputHTML += `</ul>`;
    outputBox.innerHTML = outputHTML;
    pushPage(outputHTML);
}

function loadTree(tree) {
    let outputBox = getOutputBox();
    let outputHTML = backButtonCode(outputBox.id);
    outputHTML += `<ul class="unstyled-list">`;
    for (var treeItem of tree.tree) {
        outputHTML += `<li><button onclick="selectPath('${treeItem.url}', '${treeItem.type}')">${treeItem.path}</button></li>`;
    }
    outputHTML += `</ul>`;
    outputBox.innerHTML = outputHTML;
    pushPage(outputHTML);
}

function loadBlob(blob) {
    let outputBox = getOutputBox();
    let codeBox = document.createElement('code');
    codeBox.innerText = blob;
    let preBox = document.createElement('pre');
    preBox.appendChild(codeBox);
    outputBox.innerHTML = backButtonCode(outputBox.id);
    outputBox.appendChild(preBox);
    highlightCode(preBox);
    pushPage(outputBox.innerHTML);
}
