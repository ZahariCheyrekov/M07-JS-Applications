function loadCommits() {
    const inputUsername = document.getElementById('username');
    const repoUsername = document.getElementById('repo');
    const ulList = document.getElementById('commits');

    while (ulList.firstChild) {
        ulList.removeChild(ulList.firstChild);
    }

    const url = `https://api.github.com/repos/${inputUsername.value}/${repoUsername.value}/commits`;

    fetch(url)
        .then(res => res.ok ? res.json() : createElement(`Error: ${res.status}(${res.statusText})`))
        .then((data) =>
            data.forEach(({ commit }) => {
                createElement(`${commit.author.name}: ${commit.message}`);
            }));

    function createElement(liContent) {
        const li = document.createElement('li');
        li.textContent = liContent;
        ulList.appendChild(li);
    }
}