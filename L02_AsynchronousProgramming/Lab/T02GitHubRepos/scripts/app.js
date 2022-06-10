function loadRepos() {
	const username = document.getElementById('username').value;
	const ulList = document.getElementById('repos');

	while (ulList.firstChild) {
		ulList.removeChild(ulList.firstChild);
	}

	const url = `https://api.github.com/users/${username}/repos`;

	fetch(url)
		.then((response) => response.json())
		.then(data => data.forEach(({ full_name, html_url }) => {
			const li = document.createElement('li');
			const a = document.createElement('a');
			a.textContent = full_name;
			a.href = html_url;

			li.appendChild(a);
			ulList.appendChild(li);
		}))
		.catch((error) => console.log(error));
}