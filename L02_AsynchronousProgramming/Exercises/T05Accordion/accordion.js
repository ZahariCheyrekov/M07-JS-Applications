async function solution() {
    const main = document.getElementById('main');
    const url = 'http://localhost:3030/jsonstore/advanced/articles/list';

    const res = await fetch(url);
    const data = await res.json();

    data.forEach(dataEl => {
        main.appendChild(createArticle(dataEl));
    });
}


solution();